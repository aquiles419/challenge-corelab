import { inject, injectable } from "tsyringe";

import { ok } from "../../../../infra/shared/helpers/Environment/HttpResponseCodes";
import {
  IController,
  IRequest,
  IResponse,
} from "../../../../infra/shared/helpers/protocols";
import { ILisTasksUseCase } from "../../useCases/ListTasks";
import { IListTasksFilters } from "../../dtos/ITasksDTO";

type RequestQuery = {
  per?: string;
  page?: string;
};

@injectable()
export class ListTasksController implements IController {
  constructor(
    @inject("ListTasksUseCase")
    private listTasksUseCase: ILisTasksUseCase
  ) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { per, page }: RequestQuery = request.query || {};

    const filters: IListTasksFilters = {
      per: Number(per),
      page: Number(page),
    };

    const tasks = await this.listTasksUseCase.execute(filters);

    return ok(tasks);
  }
}
