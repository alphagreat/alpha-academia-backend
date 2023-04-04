import { Router } from 'express';
import usersController from '../../controllers/userController';

const userRoutes = Router();

userRoutes
  .route('/')
  .get(
    /* 
        #swagger.tags = ['Users'] 
        #swagger.path = '/users'

        #swagger.responses[200] = {description: 'success'}
        #swagger.responses[500] = {
            schema: { $ref: '#/definitions/InternalServerError' }
        }
    */
    usersController.index
  )
  .post(
    /* 
        #swagger.tags = ['Users'] 
        #swagger.path = '/users'

        #swagger.responses[400] = {
            schema: { $ref: '#/definitions/BadRequest' }
        }
        #swagger.responses[500] = {
            schema: { $ref: '#/definitions/InternalServerError' }
        }
    */
    usersController.create
  );

export default userRoutes;
