import { inject, injectable } from "tsyringe";
import {
  IController,
  IRequest,
  IResponse,
} from "../../../../infra/shared/helpers/protocols";
import { ok } from "../../../../infra/shared/helpers/Environment/HttpResponseCodes";
import { DeleteTasksUseCase } from "../../useCases/DeleteTasks/DeleteTasksUseCase";

@injectable()
export class DeleteTasksController implements IController {
  constructor(
    @inject("DeleteTasksUseCase")
    private deleteTasksUseCase: DeleteTasksUseCase
  ) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { id } = request.params;

    await this.deleteTasksUseCase.execute(id);

    return ok({ message: "Task deleted successfully" });
  }
}
