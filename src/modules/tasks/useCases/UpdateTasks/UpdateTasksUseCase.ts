import { inject, injectable } from "tsyringe";
import { AppException } from "../../../../infra/shared/exceptions";
import { IUpdateTasksUseCase } from "./IUpdateTasksUseCase";
import { Tasks } from "../../schemas/tasks";
import { IUpdateTasksDTO } from "../../dtos/ITasksDTO";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
export class UpdateTasksUseCase implements IUpdateTasksUseCase {
  constructor(
    @inject("TasksRepository")
    private taskRepository: ITasksRepository
  ) {}

  async execute({ _id, ...data }: IUpdateTasksDTO): Promise<Tasks> {
    const task = await this.taskRepository.findById(_id);

    if (!task) {
      throw new AppException(
        `tasks with id ${_id} not found`,
        404,
        "TaskNotFound"
      );
    }

    Object.assign(task, data);
    await this.taskRepository.save(task);

    return task;
  }
}
