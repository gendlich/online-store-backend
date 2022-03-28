import express, { Request, Response } from 'express';
import { indexP, showP, createP } from './productRoutes';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.sendStatus(200);
});

router.get('/product/', indexP);
router.get('/product/:id', showP);
router.post('/product/', createP);

export default router;
