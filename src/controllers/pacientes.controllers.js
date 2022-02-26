import Paciente from "../models/pacientes";




const pacienteCtrl = {};

pacienteCtrl.getPacientes = async (req, res)=>{
    //res.send('aqui enviaria la lista de pacientes');
    try {
      const listaPacientes= await Paciente.find();
      res.status(200).json(listaPacientes);
    } catch (error) {
      console.log(error);
      res.status(404).json({mensaje: "Error al intentar listar los pacientes"});
    }
};

pacienteCtrl.postPaciente = async(req, res) => {
    // res.send('doy de alta un producto');
    // console.log(req.body);
    try {
       //validar el (req.body) copiadas del front
       //crear un obj para guardar en la BBDD
        const newPaciente= new Paciente({
            nombreDueño: req.body.nombreDueño,
            apellidoDueño: req.body.apellidoDueño,
            email: req.body.email,
            telefono: req.body.telefono,
            nombreMascota: req.body.nombreMascota,
            especieMascota: req.body.especieMascota,
            razaMascota: req.body.razaMascota
        });
        //una vez creado se guarda en la BBDD
        await newPaciente.save();
        //enviar resp al front end
        res.status(201).json({
            mensaje: 'El producto se creo correctamente'
        })
     } catch (error) {
       console.log(error);
       //envio de respuesta al front
       res.status(404).json({
         mensaje: "Error al intentar agregar un producto",
       });
     }
  };

export default pacienteCtrl;