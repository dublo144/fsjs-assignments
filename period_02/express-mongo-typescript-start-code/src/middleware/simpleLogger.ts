import express from 'express';

export const simpleLogger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log('Logged:', new Date().toString(), req.method, req.originalUrl);
  next();
};
