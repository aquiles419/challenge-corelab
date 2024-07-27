import { getModelForClass, ReturnModelType } from "@typegoose/typegoose";

import { Tasks } from "../schemas/tasks";
import { ICreateTasksDTO, IUpdateTaskssDTO } from "../dtos/ITasksDTO";
import { ITasksRepository } from "./ITasksRepository";

export class MongoTasksRepository implements ITasksRepository {
  private ormRepository: ReturnModelType<typeof Tasks>;

  constructor() {
    this.ormRepository = getModelForClass(Tasks);
  }

  public async create(data: ICreateTasksDTO): Promise<Tasks> {
    return this.ormRepository.create(data);
  }

  public async findById(id: string): Promise<Tasks | null> {
    return this.ormRepository.findOne({ _id: id });
  }

  public async findAll(): Promise<Tasks[]> {
    return this.ormRepository.find();
  }

  public async save(tasks: IUpdateTaskssDTO): Promise<Tasks | null> {
    return this.ormRepository.findOneAndUpdate({ _id: tasks._id }, tasks, {
      new: true,
    });
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.deleteOne({ _id: id });
  }
}
