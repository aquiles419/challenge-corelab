import {
  IController,
  IRequest,
  IResponse,
} from "../../../../infra/shared/helpers/protocols";

import { inject, injectable } from "tsyringe";
import { AppException } from "../../../../infra/shared/exceptions";
import { created } from "../../../..//infra/shared/helpers/Environment/HttpResponseCodes";
import { ICreateTasksUseCase } from "../../useCases/CreateTasks";
import { ICreateTasksDTO } from "../../dtos/ITasksDTO";

type RequestType = {
  body: {
    id?: string;
    name: string;
    description?: string;
    favorite?: boolean;
    created_at?: Date;
    updated_at?: Date;
  };
};

@injectable()
export class CreateTasksController implements IController {
  constructor(
    @inject("CreateTasksUseCase")
    private createTasksUseCase: ICreateTasksUseCase
  ) {}

  async handle(request: IRequest<RequestType>): Promise<IResponse> {
    const { id, name, description, favorite, created_at, updated_at } =
      request.body;

    if (!name || !description) {
      throw new AppException(
        "Name or Description is empty",
        400,
        "MissingBody"
      );
    }

    const data: ICreateTasksDTO = {
      _id: id,
      name,
      description,
      favorite,
      created_at,
      updated_at,
    };

    const task = await this.createTasksUseCase.execute(data);

    return created(task);
  }
}
