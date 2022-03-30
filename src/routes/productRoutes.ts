import { Request, Response } from 'express';
import { Product, ProductModels } from '../models/product';

const productModel = new ProductModels();

export const indexP = async (req: Request, res: Response) => {
  const products = await productModel.index();
  res.json(products);
};

export const showP = async (req: Request, res: Response) => {
  const product = await productModel.show(req.params.id);
  res.json(product);
};

export const createP = async (req: Request, res: Response) => {
  const product: Product = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category
  };
  const createProduct = await productModel.create(product);
  res.json(createProduct);
};

export const popularP = async (req: Request, res: Response) => {
  const products = await productModel.popularProducts();
  res.json(products);
};

export const categoryP = async (req: Request, res: Response) => {
  const products = await productModel.filterByCategory(req.params.category);
  res.json(products);
};
