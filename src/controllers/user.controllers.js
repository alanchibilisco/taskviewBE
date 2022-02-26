import User from "../models/user";
import { validateTextoEsp } from "../helpers/Validaciones";

const userCtrl={};

userCtrl.getUser=async(req, res)=>{
    res.send('aqui traigo el user');
};


userCtrl.postUser=async(req, res)=>{
    res.send('aqui cargo el usuario');
}



export default userCtrl;