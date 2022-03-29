import express, { Request, Response } from 'express';
import authJWT from '../middlewares/authJWT';
import { indexP, showP, createP } from './productRoutes';
import { createU, indexU, showU } from './userRoutes';
import { indexO, statusO, createO } from './orderRoutes';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.sendStatus(200);
});

router.get('/product/', indexP);
router.get('/product/:id', showP);
router.post('/product/', authJWT, createP);

router.get('/user/', authJWT, indexU);
router.get('/user/:id', authJWT, showU);
router.post('/user/', createU);

router.get('/order/:id', authJWT, indexO);
router.get('/order/:id/:status', authJWT, statusO);
router.post('/order/', authJWT, createO);

export default router;
