import { Router } from "express";

import { container } from "tsyringe";

// adapters
import { ExpressControllerAdapter } from "../../../infra/shared/adapters/ExpressControllerAdapter";

// controllers
import { CreateTasksController } from "../controllers/CreateTasks";
import { ListTasksController } from "../controllers/ListTasks";
import { DeleteTasksController } from "../controllers/DeleteTasks/DeleteTasksController";

const createTasksController = ExpressControllerAdapter(
  container.resolve(CreateTasksController)
);

const listTasksController = ExpressControllerAdapter(
  container.resolve(ListTasksController)
);

const deleteTasksController = ExpressControllerAdapter(
  container.resolve(DeleteTasksController)
);

const tasksRoutes = Router();

tasksRoutes.post("/tasks", createTasksController);
tasksRoutes.get("/tasks", listTasksController);
tasksRoutes.delete("/tasks/:id", deleteTasksController);

export default tasksRoutes;
