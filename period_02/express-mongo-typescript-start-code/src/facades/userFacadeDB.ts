const debug = require('debug')('game-case');
import bcrypt from 'bcryptjs';
import * as mongo from 'mongodb';
import { getConnectedClient } from '../config/setupDB';

export interface IGameUser {
  name: string;
  userName: string;
  password: string;
  role: string;
}

let users: Array<IGameUser> = [
  { name: 'Mads', userName: 'mbb', password: '123', role: 'user' }
];

let userCollection: mongo.Collection;

export default class UserFacade {
  static async initDB(client: mongo.MongoClient) {
    const dbname = process.env.DB_NAME;
    try {
      userCollection = await client.db(dbname).collection('users');
    } catch (error) {
      console.error('Could not create connection', error);
    }
  }

  static async addUser(user: IGameUser): Promise<boolean> {
    /*Info: Import bcryptjs and (npm install bcryptjs) and hash before you store */
    try {
      const userExists: boolean = users.some(
        (u) => u.userName === user.userName
      );
      if (userExists) throw new Error('User already exists');

      const hashedPw: string = await bcrypt.hash(user.password, 12);

      users.push({
        ...user,
        password: hashedPw
      });

      return true;
    } catch (error) {
      debug(error);
      return false;
    }
  }

  static deleteUser(userName: string): boolean {
    try {
      const userExists: boolean = users.some((u) => u.userName === userName);
      if (!userExists) throw new Error('User does not exist');
      users.filter((u) => u.userName !== userName);
      return true;
    } catch (error) {
      debug(error);
      return false;
    }
  }

  static async getAllUsers(proj?: object): Promise<Array<any>> {
    const users = await userCollection.find({}, { projection: proj }).toArray();
    return users;
  }

  static getUser(userName: string): IGameUser {
    const user = users.find((u) => u.userName === userName);
    if (!user) throw new Error('User not found');
    return user;
  }

  static async checkUser(userName: string, password: string): Promise<boolean> {
    /*Use bcrypjs's compare method */
    try {
      const user = users.filter((u) => u.userName === userName)[0];
      if (!user) throw new Error('User not found');

      const authenticated = await bcrypt.compare(password, user.password);
      if (!authenticated) throw new Error('Invalid password');

      return true;
    } catch (error) {
      // Log correct error?
      throw new Error('Invalid credentials');
    }
  }
}
