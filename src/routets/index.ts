import { Router } from 'express';
import userRoutes from './api/userRoutes';
import bioRoutes from './api/bioRoutes';

const mainRouter = Router();

mainRouter.use('/users', userRoutes);
mainRouter.use('/bios', bioRoutes);

export default mainRouter;
