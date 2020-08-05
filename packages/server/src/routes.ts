import express from "express";

import ClassController from "./controllers/ClassesController";
import ConnectionController from "./controllers/connectionsControllers";

const routes = express.Router();
const classesControllers = new ClassController();
const ConnectionsController = new ConnectionController();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.post("/connections", ConnectionsController.create);
routes.get("/connections", ConnectionsController.index);

export default routes;
