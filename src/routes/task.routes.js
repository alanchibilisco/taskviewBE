import {Router} from "express";

import taskCtrl from "../controllers/task.controllers";

const routeTask=Router();

routeTask.route("/getTask").get(taskCtrl.getTask);

routeTask.route("/putTask").put(taskCtrl.putTask);

export default routeTask;