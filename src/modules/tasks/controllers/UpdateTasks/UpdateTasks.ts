import { inject, injectable } from "tsyringe";
import { ok } from "../../../../infra/shared/helpers/Environment/HttpResponseCodes";
import {
  IController,
  IRequest,
  IResponse,
} from "../../../../infra/shared/helpers/protocols";
import { IUpdateTasksUseCase } from "../../useCases/UpdateTasks/IUpdateTasksUseCase";

@injectable()
export class UpdateUsersController implements IController {
  constructor(
    @inject("UpdateTasksUseCase")
    private updateTasksUseCase: IUpdateTasksUseCase
  ) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { id } = request.params;
    const { name, description, favorite, color } = request.body;

    const updatedUser = await this.updateTasksUseCase.execute({
      _id: id,
      name,
      description,
      favorite,
      color,
    });

    return ok(updatedUser);
  }
}
