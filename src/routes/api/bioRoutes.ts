import { Router } from 'express';
import bioController from '../../controllers/bioController';

const bioRoutes = Router();

bioRoutes.route('/:userId').put(
  /* 
        #swagger.tags = ['Bios'] 
        #swagger.path = '/bios/{userId}'
        #swagger.parameters['userId'] = { description: 'The id of the user' }

        #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Details of user bio',
                schema: { $ref: '#/definitions/UpdateUserBio' }
        }
        
        #swagger.responses[500] = {
            schema: { $ref: '#/definitions/InternalServerError' }
        }
        #swagger.responses[400] = {
            schema: { $ref: '#/definitions/BadRequest' }
        }
    */
  bioController.update
);

export default bioRoutes;
