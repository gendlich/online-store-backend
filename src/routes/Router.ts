import express, { Request, Response } from 'express';
import { indexP, showP, createP } from './productRoutes';
import { createU, indexU, showU } from './userRoutes';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.sendStatus(200);
});

router.get('/product/', indexP);
router.get('/product/:id', showP);
router.post('/product/', createP);
router.get('/user/', indexU);
router.get('/user/:id', showU);
router.post('/user/', createU);

export default router;
