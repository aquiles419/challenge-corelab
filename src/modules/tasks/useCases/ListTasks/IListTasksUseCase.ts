import { IListTasksFilters } from "../../dtos/ITasksDTO";
import { Tasks } from "../../schemas/tasks";

export interface ILisTasksUseCase {
  execute(filters: IListTasksFilters): Promise<Tasks[]>;
}
