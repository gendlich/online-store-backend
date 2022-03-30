import express, { Request, Response } from 'express';
import authJWT from '../middlewares/authJWT';
import { indexP, showP, createP, popularP, categoryP } from './productRoutes';
import { createU, deleteU, indexU, showU } from './userRoutes';
import { indexO, statusO, createO } from './orderRoutes';
import { corsOptions } from '../server';
import cors from 'cors'

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.sendStatus(200);
});

router.get('/product/', cors(corsOptions), indexP);
router.get('/product/:id', cors(corsOptions),showP);
router.post('/product/', cors(corsOptions),authJWT, createP);
router.get('/popular/', cors(corsOptions),popularP);
router.get('/category/:category', cors(corsOptions),categoryP);

router.get('/user/', cors(corsOptions),authJWT, indexU);
router.get('/user/:id', cors(corsOptions),authJWT, showU);
router.post('/user/', cors(corsOptions),createU);
router.delete('/user/:id', cors(corsOptions),authJWT, deleteU)

router.get('/order/:id', cors(corsOptions),authJWT, indexO);
router.get('/order/:id/:status', cors(corsOptions),authJWT, statusO);
router.post('/order/', cors(corsOptions),authJWT, createO);

export default router;
