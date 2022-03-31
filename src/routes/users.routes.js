import { Router } from "express";
import usersCtrl from "../controllers/users.controllers";

const routeUsers = Router();

routeUsers.route("/users").get(usersCtrl.getUsers).post(usersCtrl.postUser);

routeUsers
  .route("/users/:id")
  .get(usersCtrl.getUser)
  .put(usersCtrl.putUser)
  .delete(usersCtrl.deleteUser);
export default routeUsers;
