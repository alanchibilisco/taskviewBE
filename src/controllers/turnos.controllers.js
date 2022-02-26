import Turno from "../models/turnos";
import { validateTextoEsp } from "../helpers/Validaciones";

const turnoCtrl={};

turnoCtrl.getTurno=async(req, res)=>{
    res.send('aqui enviaria la lista de turnos');
    
};

turnoCtrl.postTurno=async(req, res)=>{
    res.send('estoy creando un turno');
    console.log(req.body);
};


export default turnoCtrl;