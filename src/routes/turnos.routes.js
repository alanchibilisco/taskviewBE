import { Router } from "express";
import turnoCtrl from "../controllers/turnos.controllers";

const routeTurno = Router();

routeTurno.route("/turnos").get(turnoCtrl.getTurno).post(turnoCtrl.postTurno);

export default routeTurno;