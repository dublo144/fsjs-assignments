import auth from 'basic-auth';
import express from 'express';
import { UserFacade, IGameUser } from '../facades/userFacade';

const router = express.Router();

router.post('/', (req, res) => {
  const { body } = req;
  res.json(
    UserFacade.addUser({
      name: body.name,
      userName: body.userName,
      password: body.password,
      role: body.role
    })
  );
});

router.use(auth);

router.get('/', (req, res) => {
  const users: IGameUser[] = UserFacade.getAllUsers();
  return res.json(users);
});

router.get('/:id', (req, res) => {
  const username: string = req.params.id;
  const user: IGameUser = UserFacade.getUser(username);
  return res.json(user);
});

router.delete('/:id', (req, res) => {
  return res.json(UserFacade.deleteUser(req.params.id));
});

export default router;
