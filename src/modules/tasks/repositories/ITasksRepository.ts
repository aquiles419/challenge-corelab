import { ICreateTasksDTO, IUpdateTaskssDTO } from "../dtos/ITasksDTO";
import { Tasks } from "../schemas/tasks";

export interface ITasksRepository {
  create(data: ICreateTasksDTO): Promise<Tasks>;
  save(trips: IUpdateTaskssDTO): Promise<Tasks | null>;
  delete(id: string): Promise<void>;
}
