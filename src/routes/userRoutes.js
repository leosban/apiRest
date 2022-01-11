import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deve existir num sistema real, exemplo para completar o CRUD
// router.get('/:id', userController.show); // Lista usuário
// router.get('/', userController.index); // Lista usuários

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
