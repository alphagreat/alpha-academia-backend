import { Router } from 'express';
import userRoutes from './api/userRoutes';

const mainRouter = Router();

mainRouter.use('/users', userRoutes)


export default mainRouter;