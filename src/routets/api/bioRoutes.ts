import { Router } from 'express';
import bioController from '../../controllers/bioController';

const bioRoutes = Router();

bioRoutes.route('/:userId').put(bioController.update);

export default bioRoutes;
