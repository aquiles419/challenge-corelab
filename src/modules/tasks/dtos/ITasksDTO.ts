export interface ITasksDTO {
  _id: string;
  name: string;
  description: string;
  favorite?: boolean;
  color?: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateTasksDTO {
  _id: string;
  name: string;
  description: string;
  favorite?: boolean;
  color?: string;
  created_at: Date;
  updated_at: Date;
}

export type IUpdateTasksDTO = Partial<ICreateTasksDTO> & { _id: string };

export interface IListTasksFilters {
  per: number;
  page: number;
}
