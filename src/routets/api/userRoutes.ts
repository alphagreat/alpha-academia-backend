import { Router } from 'express';
import usersController from '../../controllers/userController';

const userRoutes = Router();

userRoutes.route('/').get(usersController.index).post(usersController.create);

export default userRoutes;