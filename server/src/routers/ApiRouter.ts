import express from 'express';
import ClientsRouter from './ClientsRouter';

const router = express.Router();

router.use('/clients', ClientsRouter);

export default router;
