export interface ITasksDTO {
  _id: string;
  name: string;
  description: string;
  favorite?: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateTasksDTO {
  _id: string;
  name: string;
  description: string;
  favorite?: boolean;
  created_at: Date;
  updated_at: Date;
}

export type IUpdateTaskssDTO = Partial<ICreateTasksDTO> & { _id: string };
