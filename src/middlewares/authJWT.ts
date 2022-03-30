import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const authJWT = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];
    const decoded = jwt.verify(
      token as string,
      process.env.JWT_SECRET as string
    );

    next();
  } catch (e) {
    res.status(401);
    throw 'Error: ' + e;
  }
};

export default authJWT;
