import { Router } from "express";

import { container } from "tsyringe";

// adapters
import { ExpressControllerAdapter } from "../../../infra/shared/adapters/ExpressControllerAdapter";

// controllers
import { CreateTasksController } from "../controllers/CreateTasks";

const createTasksController = ExpressControllerAdapter(
  container.resolve(CreateTasksController)
);

const tasksRoutes = Router();

tasksRoutes.post("/tasks", createTasksController);

export default tasksRoutes;
