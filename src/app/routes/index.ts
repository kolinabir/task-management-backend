import { Router } from 'express';
import { AuthRoute } from '../Modules/Auth/auth.routes';
import { TaskRoute } from '../Modules/Task/task.routes';

const router = Router();

const modulesRoutes = [
  {
    path: '/auth',
    router: AuthRoute,
  },
  {
    path: '/tasks',
    router: TaskRoute,
  },
];
modulesRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
