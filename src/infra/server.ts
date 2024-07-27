import "reflect-metadata";
import express from "express";
import "express-async-errors";

import "../infra/shared/container";
import cors from "cors";
import { Environment } from "./shared/helpers/Environment";
import "../infra/mongoose";
import routes from "../infra/routes";
import { Handler } from "./shared/exceptions";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.use(new Handler().handleError);

const PORT = Environment.getEnvString("PORT") || 3333;

app.listen(PORT, () => {
  console.info(`🚀 Server is running on port ${PORT}`);
});
