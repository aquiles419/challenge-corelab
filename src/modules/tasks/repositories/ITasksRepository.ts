import {
  ICreateTasksDTO,
  IListTasksFilters,
  IUpdateTaskssDTO,
} from "../dtos/ITasksDTO";
import { Tasks } from "../schemas/tasks";

export interface ITasksRepository {
  findAllWithFilters(filters: IListTasksFilters): Promise<Tasks[]>;
  create(data: ICreateTasksDTO): Promise<Tasks>;
  save(trips: IUpdateTaskssDTO): Promise<Tasks | null>;
  delete(id: string): Promise<void>;
}
