import Turno from "../models/turnos";
import { validateTextoEsp } from "../helpers/Validaciones";

const turnoCtrl={};

turnoCtrl.getTurno=async(req, res)=>{
    //res.send('aqui enviaria la lista de turnos');
    try {
        const listTurnos=await Turno.find();
        res.status(200).json(listTurnos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar listar los turnos"
        })
    }
    
};

turnoCtrl.postTurno=async(req, res)=>{
    //res.send('estoy creando un turno');
    //console.log(req.body);
    try {
        if (validateTextoEsp(req.body.detalleCita)&&validateTextoEsp(req.body.veterinario)&&validateTextoEsp(req.body.mascota)&&validateTextoEsp(req.body.startDate)) {
            const newTurno= new Turno({
                detalleCita: req.body.detalleCita,
                veterinario: req.body.veterinario,
                mascota: req.body.mascota,
                startDate: req.body.startDate
            });
            await newTurno.save();
            res.status(201).json({
                mensaje: "El turno se creo correctamente"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar agregar un turno"
        });
    }
};


export default turnoCtrl;