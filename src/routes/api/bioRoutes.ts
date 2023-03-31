import { Router } from 'express';
import bioController from '../../controllers/bioController';

const bioRoutes = Router();

bioRoutes.route('/:userId').put(
  /* 
        #swagger.tags = ['Bios'] 
        #swagger.path = '/bios/{userId}'
        #swagger.parameters['userId'] = { description: 'The id of the user' }

        #swagger.parameters['gender'] = { description: 'The gender of the user', in: 'body' }
    */
  bioController.update
);

export default bioRoutes;
