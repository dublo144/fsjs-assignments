import auth from 'basic-auth';
import express from 'express';
import { UserFacade, IGameUser } from '../facades/userFacade';

const router = express.Router();

router.post('/', async (req, res, next) => {
  const { body } = req;
  try {
    res.json(
      await UserFacade.addUser({
        name: body.name,
        userName: body.userName,
        password: body.password,
        role: body.role
      })
    );
  } catch (err) {
    next(err);
  }
});

if (!process.env.SKIP_AUTHENTICATION) {
  router.use(auth);
}

router.get('/', async (req, res, next) => {
  try {
    const users: IGameUser[] = await UserFacade.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const username: string = req.params.id;
    const user: IGameUser = await UserFacade.getUser(username);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    res.json(await UserFacade.deleteUser(req.params.id));
  } catch (error) {
    next(error);
  }
});

export default router;
