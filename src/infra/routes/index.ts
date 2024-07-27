import { Router } from "express";

const routes = Router();

routes.get("/healthcheck", (_request, response) =>
  response.send("Health checked!")
);

export default routes;
