import { Request, Response } from 'express';
import { ProductOrder, ProductOrderModels } from '../models/productOrders';

const productOrderModel = new ProductOrderModels();

export const addToOrder = async (req: Request, res: Response) => {
  const productOrder: ProductOrder = {
    order_id: req.body.order_id,
    product_id: req.body.product_id,
    product_quantity: req.body.product_quantity
  };
  try {
    const createProductOrder = await productOrderModel.create(productOrder);
    res.json(createProductOrder).status(200);
  } catch (e) {
    throw new Error(`Cannot add to the order ${req.params.id}. Error: ${e}`);
    res.status(400);
  }
};
