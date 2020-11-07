import { MongoClient } from 'mongodb';
const debug = require('debug')('db-setup');

const connection = process.env.CONNECTION || '';
let client = new MongoClient(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let connected = false;

export const getConnectedClient = async () => {
  if (connected) {
    return client;
  }

  debug('######## Connecting  ###########');

  client = await client.connect();
  connected = true;
  return client;
};

export const closeConnection = async () => {
  if (connected) {
    connected = false;
    await client.connect();
    debug('######## Connection Closed ###########');
  }
};
