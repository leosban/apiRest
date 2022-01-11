import { Router } from 'express';
import tokeController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokeController.store);

export default router;
