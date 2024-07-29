import { container } from "tsyringe";

// Repository
import { ITasksRepository } from "../repositories/ITasksRepository";
import { MongoTasksRepository } from "../repositories/MongoTasksRepositories";

// UseCases

import {
  CreateTasksUseCase,
  ICreateTasksUseCase,
} from "../useCases/CreateTasks";
import { ILisTasksUseCase, ListTasksUseCase } from "../useCases/ListTasks";
import { IDeleteTasksUseCase } from "../useCases/DeleteTasks/IDeleteTasksUseCase";
import { DeleteTasksUseCase } from "../useCases/DeleteTasks/DeleteTasksUseCase";
import { IUpdateTasksUseCase } from "../useCases/UpdateTasks/IUpdateTasksUseCase";
import { UpdateTasksUseCase } from "../useCases/UpdateTasks/UpdateTasksUseCase";

// Repositories
container.registerSingleton<ITasksRepository>(
  "TasksRepository",
  MongoTasksRepository
);

// useCases
container.registerSingleton<ICreateTasksUseCase>(
  "CreateTasksUseCase",
  CreateTasksUseCase
);

container.registerSingleton<ILisTasksUseCase>(
  "ListTasksUseCase",
  ListTasksUseCase
);

container.registerSingleton<IDeleteTasksUseCase>(
  "DeleteTasksUseCase",
  DeleteTasksUseCase
);

container.registerSingleton<IUpdateTasksUseCase>(
  "UpdateTasksUseCase",
  UpdateTasksUseCase
);
