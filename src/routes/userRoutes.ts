import { Request, Response } from 'express';
import { User, UserModels } from '../models/user';


const userMethod = new UserModels();

export const indexU = async (req: Request, res: Response) => {
  const users = await userMethod.index();
  res.json(users);
};

export const showU = async (req: Request, res: Response) => {
  const user = await userMethod.show(req.params.id);
  res.json(user);
};

export const createU = async (req: Request, res: Response) => {
  const user: User = {
  firstname: req.body.firstname,
  lastname: req.body.lastname,
  password: req.body.password
  };
  const createuser = await userMethod.create(user);
  res.json(createuser);
};
