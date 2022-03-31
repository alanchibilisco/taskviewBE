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

export default usersCtrl;