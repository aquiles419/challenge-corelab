import { container } from "tsyringe";

// Repository
import { ITasksRepository } from "../repositories/ITasksRepository";
import { MongoTasksRepository } from "../repositories/MongoTasksRepositories";

// UseCases

import {
  CreateTasksUseCase,
  ICreateTasksUseCase,
} from "../useCases/CreateTask";

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
