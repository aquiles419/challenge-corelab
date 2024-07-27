import { inject, injectable } from "tsyringe";
import { Tasks } from "../../schemas/tasks";
import { v4 as uuidV4 } from "uuid";
import { ITasksDTO } from "../../dtos/ITasksDTO";
("../dtos/ITasksDTO");
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
export class CreateTasksUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITasksRepository
  ) {}

  async execute(data: ITasksDTO): Promise<Tasks> {
    const currentDate = new Date();

    const tasks: ITasksDTO = {
      _id: data._id || uuidV4(),
      name: data.name,
      description: data.description,
      favorite: false,
      created_at: data.created_at || currentDate,
      updated_at: data.updated_at || currentDate,
    };

    const createdTask = await this.tasksRepository.create(tasks);

    return createdTask;
  }
}
