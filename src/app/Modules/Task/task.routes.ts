import { Router } from 'express';
import { TaskController } from './task.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = Router();

//check if user is

// router.post(
//   '/login',
//   validateRequest(AuthValidation.loginValidationSchema),
//   AuthController.loginUser,
// );

router.get('/', auth(USER_ROLE.user), TaskController.getAllTasks);
router.get('/:id', TaskController.getTaskById);
router.put('/:id', TaskController.updateTaskById);
router.delete('/:id', TaskController.deleteTaskById);
//check if user is logged in then send auth middleware otherwise send TaskController.createNewTask
router.post('/', auth(USER_ROLE.user), TaskController.createNewTask);

export const TaskRoute = router;
