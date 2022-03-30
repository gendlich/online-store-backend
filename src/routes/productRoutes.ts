import { Request, Response } from 'express';
import { Product, ProductModels } from '../models/product';

const productMethod = new ProductModels();

export const indexP = async (req: Request, res: Response) => {
  const products = await productMethod.index();
  res.json(products);
};

export const showP = async (req: Request, res: Response) => {
  const product = await productMethod.show(req.params.id);
  res.json(product);
};

export const createP = async (req: Request, res: Response) => {
  const product: Product = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category
  };
  const createProduct = await productMethod.create(product);
  res.json(createProduct);
};

export const popularP = async (req: Request, res: Response) => {
  const products = await productMethod.popularProducts();
  res.json(products)
}

export const categoryP = async (req: Request, res: Response) => {
  const products = await productMethod.filterByCategory(req.params.category);
  res.json(products)
}