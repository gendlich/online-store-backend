import { Request, Response } from 'express';
import { User, UserModels } from '../models/user';
import jwt from 'jsonwebtoken';

const userModel = new UserModels();

export const indexU = async (req: Request, res: Response) => {
  const users = await userModel.index();
  res.json(users);
};

export const showU = async (req: Request, res: Response) => {
  const user = await userModel.show(req.params.id);
  res.json(user);
};

export const createU = async (req: Request, res: Response) => {
  const user: User = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password
  };
  try {
    const createUser = await userModel.create(user);
    const token = jwt.sign(
      { user: createUser },
      process.env.JWT_SECRET as string
    );
    res.json({ token, createUser });
  } catch (e) {
    throw `Error: ${e}`;
  }
};

export const deleteU = async (req: Request, res: Response) => {
  const user = await userModel.delete(req.params.id);
  res.json(user);
}