import {Router} from "express";
import superUserCtrl from "../controllers/superUser.controllers";

const routeSuperUser=Router();

routeSuperUser.route("/superUser").get(superUserCtrl.getSuperUser).post(superUserCtrl.postSuperUser);

export default routeSuperUser;