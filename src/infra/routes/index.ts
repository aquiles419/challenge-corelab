import { Router } from "express";
import tasksRoutes from "../../modules/tasks/routes/tasks.routes";

const routes = Router();

routes.get("/healthcheck", (_request, response) =>
  response.send("Health checked!")
);

routes.use("/v1", tasksRoutes);

export default routes;
