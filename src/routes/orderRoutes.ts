import { Request, Response } from 'express';
import { Order, OrderModels } from '../models/order';

const orderModel = new OrderModels();

export const indexO = async (req: Request, res: Response) => {
  const orders = await orderModel.index(req.params.id);
  res.json(orders);
};

export const statusO = async (req: Request, res: Response) => {
  const orderStatus = req.params.status as string;

  if (!(orderStatus == 'complete' || orderStatus == 'active')) {
    res.send('status has to be complete or active').status(400);
    return;
  }

  const orders = await orderModel.status(req.params.id, orderStatus);
  res.json(orders);
};

export const createO = async (req: Request, res: Response) => {
  const order: Order = {
    user_id: req.body.user_id,
    product_id: req.body.product_id,
    product_quantity: req.body.product_quantity,
    order_status: req.body.order_status
  };
  const createOrder = await orderModel.create(order);
  res.json(createOrder);
};
