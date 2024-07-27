import { Request, Response } from "express";

import { IController, IRequest } from "../helpers/protocols";

export const ExpressControllerAdapter =
  (controller: IController) => async (req: Request, res: Response) => {
    const httpRequest: IRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
    };

    const httpResponse = await controller.handle(httpRequest);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
