import { ITasksDTO } from "../../dtos/ITasksDTO";
import { Tasks } from "../../schemas/tasks";

export interface ICreateTasksUseCase {
  execute: (data: ITasksDTO) => Promise<Tasks>;
}
