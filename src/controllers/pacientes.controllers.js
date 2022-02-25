import Paciente from "../models/pacientes";




const pacienteCtrl = {};

pacienteCtrl.getPacientes = async (req, res)=>{
    try {
    const listaPacientes= await Paciente.find();
    res.status(200).json(listaPacientes);  
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intetar listar todos los pacientes"
        })
    }
};

export default pacienteCtrl;