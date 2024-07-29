import { Router } from "express";

import { container } from "tsyringe";

// adapters
import { ExpressControllerAdapter } from "../../../infra/shared/adapters/ExpressControllerAdapter";

// controllers
import { CreateTasksController } from "../controllers/CreateTasks";
import { ListTasksController } from "../controllers/ListTasks";
import { DeleteTasksController } from "../controllers/DeleteTasks/DeleteTasksController";
import { UpdateUsersController } from "../controllers/UpdateTasks/UpdateTasks";

const createTasksController = ExpressControllerAdapter(
  container.resolve(CreateTasksController)
);

const listTasksController = ExpressControllerAdapter(
  container.resolve(ListTasksController)
);

const deleteTasksController = ExpressControllerAdapter(
  container.resolve(DeleteTasksController)
);

const updateTasksController = ExpressControllerAdapter(
  container.resolve(UpdateUsersController)
);

const tasksRoutes = Router();

tasksRoutes.post("/tasks", createTasksController);
tasksRoutes.get("/tasks", listTasksController);
tasksRoutes.delete("/tasks/:id", deleteTasksController);
tasksRoutes.put("/tasks/:id", updateTasksController);

export default tasksRoutes;
