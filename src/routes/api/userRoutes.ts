import { Router } from 'express';
import usersController from '../../controllers/userController';

const userRoutes = Router();

userRoutes
  .route('/')
  .get(
    /* 
        #swagger.tags = ['Users'] 
        #swagger.path = '/users'
    */
    usersController.index
  )
  .post(
    /* 
        #swagger.tags = ['Users'] 
        #swagger.path = '/users'
    */
    usersController.create
  );

export default userRoutes;
