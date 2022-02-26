import { Router } from "express";
import comentarioCtrl from "../controllers/comentarios.controllers";

const routeComentario=Router();

routeComentario.route("/comentarios").get(comentarioCtrl.getComentarios).post(comentarioCtrl.postComentario);

export default routeComentario;