import { Request, Response } from 'express';
import { Order, OrderModels } from '../models/order';

const orderModel = new OrderModels();

export const indexO = async (req: Request, res: Response) => {
  try {
    const orders = await orderModel.index(req.params.id);
    res.json(orders).status(200);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};

export const statusO = async (req: Request, res: Response) => {
  const orderStatus = req.params.status as string;

  if (!(orderStatus == 'complete' || orderStatus == 'active')) {
    res.send('status has to be complete or active').status(400);
    return;
  }

  try {
    const orders = await orderModel.status(req.params.id, orderStatus);
    res.json(orders).status(200);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};

export const createO = async (req: Request, res: Response) => {
  const order: Order = {
    user_id: req.body.user_id,
    order_status: req.body.order_status
  };

  try {
    const createOrder = await orderModel.create(order);
    res.json(createOrder).status(200);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};
