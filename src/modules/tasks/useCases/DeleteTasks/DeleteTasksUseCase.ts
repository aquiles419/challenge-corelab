import { inject, injectable } from "tsyringe";
import { ITasksRepository } from "../../repositories/ITasksRepository";
import { AppException } from "../../../../infra/shared/exceptions";

@injectable()
export class DeleteTasksUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITasksRepository
  ) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new AppException("Task ID is required", 400, "ID is requerid");
    }

    const task = await this.tasksRepository.findById(id);
    if (!task) {
      throw new Error("Task not found");
    }

    await this.tasksRepository.delete(id);
  }
}
