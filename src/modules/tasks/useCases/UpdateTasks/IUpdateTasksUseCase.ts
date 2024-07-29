import { IUpdateTasksDTO } from "../../dtos/ITasksDTO";
import { Tasks } from "../../schemas/tasks";

export interface IUpdateTasksUseCase {
  execute(data: IUpdateTasksDTO): Promise<Tasks>;
}
