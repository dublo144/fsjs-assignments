import auth from 'basic-auth';
import express from 'express';
import { UserFacade } from '../facades/userFacade';

// Create server
const authMiddleware = async (
  req: any,
  res: express.Response,
  next: express.NextFunction
) => {
  const credentials = auth(req);

  try {
    if (
      credentials &&
      (await UserFacade.checkUser(credentials.name, credentials.pass))
    ) {
      const user = UserFacade.getUser(credentials.name);
      req.userName = user.userName;
      req.role = user.role;
      return next();
    }
  } catch (e) {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="example"');
    res.end('Access Denied');
  }
};

export default authMiddleware;
