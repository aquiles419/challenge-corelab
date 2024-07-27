export interface IDeleteTasksUseCase {
  execute: (id: string) => Promise<void>;
}
