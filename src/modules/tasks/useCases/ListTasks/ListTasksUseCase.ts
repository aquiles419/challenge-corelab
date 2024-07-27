import { inject, injectable } from "tsyringe";

import { Tasks } from "../../schemas/tasks";
import { ILisTasksUseCase } from "./IListTasksUseCase";
import { IListTasksFilters } from "../../dtos/ITasksDTO";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
export class ListTasksUseCase implements ILisTasksUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITasksRepository
  ) {}

  public async execute(filters: IListTasksFilters): Promise<Tasks[]> {
    const tasks = this.tasksRepository.findAllWithFilters(filters);
    return tasks;
  }
}
