export type IResponse = {
  statusCode: number;
  body: any;
};

interface IAnyRequest {
  body?: any;
  headers?: any;
  params?: any;
  query?: any;
}

type IResponseType<T> = T;

export type IRequest<T = void> = T extends void
  ? IAnyRequest
  : IResponseType<T>;
