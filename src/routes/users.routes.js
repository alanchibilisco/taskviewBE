import {Router} from "express";
import usersCtrl from "../controllers/users.controllers";

const routeUsers=Router();

routeUsers.route("/users").get(usersCtrl.getUsers).post(usersCtrl.postUser);


export default routeUsers;
