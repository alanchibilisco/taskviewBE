import Users from "../models/users";
import { testPass, testEmail } from "../helpers/Validaciones";

const usersCtrl = {};

usersCtrl.getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al obtener el listado de usuarios",
    });
  }
};

usersCtrl.postUser=async(req, res)=>{
    try {
        if (testEmail(req.body.userName)&&testPass(req.body.password)) {
            const newUser= new Users({
                userName: req.body.userName,
                password: req.body.password,
                favoriteFilms: req.body.favoriteFilms
            });
            await newUser.save();
            res.status(201).json({
                mensaje: "El usuario se creo correctamente"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al crear el usuario"
        });
    }
};

usersCtrl.getUser=async(req, res)=>{
    try {
        const findUser=await Users.findById(req.params.id);
        res.status(200).json(findUser);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al obtener el usuario"
        })
    }
};

usersCtrl.putUser=async(req, res)=>{
    try {
        if (testEmail(req.body.userName)&&testPass(req.body.password)) {
            await Users.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                mensaje: "Se actualizaron los datos del usuario"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "No se pudo actualizar los datos del usuario"
        })
    }
};

usersCtrl.deleteUser=async(req,res)=>{
    try {
        await Users.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: "Se elimino el usuario"
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "No se pudo eliminar el usuario"
        })
    }
}

export default usersCtrl;