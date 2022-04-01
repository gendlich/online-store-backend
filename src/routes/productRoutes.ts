import { Request, Response } from 'express';
import { Product, ProductModels } from '../models/product';

const productModel = new ProductModels();

export const indexP = async (req: Request, res: Response) => {
  try {
    const products = await productModel.index();
    res.json(products).status(200);
  } catch (e) {
    console.log(e);
  }
};

export const showP = async (req: Request, res: Response) => {
  try {
    const product = await productModel.show(req.params.id);
    res.json(product).status(200);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};

export const createP = async (req: Request, res: Response) => {
  const product: Product = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category
  };
  try {
    const createProduct = await productModel.create(product);
    res.json(createProduct).status(200);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};

export const popularP = async (req: Request, res: Response) => {
  try {
    const products = await productModel.popularProducts();
    res.json(products).status(200);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};

export const categoryP = async (req: Request, res: Response) => {
  try {
    const products = await productModel.filterByCategory(req.params.category);
    res.json(products).status(200);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};
