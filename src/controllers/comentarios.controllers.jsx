import Comentario from "../models/comentarios";
import { validateTexto, validateTextoEsp } from "../helpers/Validaciones";


const comentarioCtrl={};

comentarioCtrl.getComentarios=async(req, res)=>{
    res.send("aqui obtengo el listado de comentarios");
};


comentarioCtrl.postComentario=async(req, res)=>{
    res.send('aqui creo el comentario');
};


export default comentarioCtrl;