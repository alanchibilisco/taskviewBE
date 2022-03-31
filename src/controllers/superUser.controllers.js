import SuperUser from "../models/superUser";

const superUserCtrl={};

superUserCtrl.getSuperUser=async(req, res)=>{
    try {
        const superUser=await SuperUser.find();
        res.status(200).json(superUser);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al obtener el SuperUsario" 
        });
    }
};

superUserCtrl.postSuperUser=async(req, res)=>{
    // res.send('aqui cargo el usuario');
     try {
         const newSU=new SuperUser({
             userName: req.body.userName,
             password: req.body.password
         });
         await newSU.save();
         res.status(201).json({
             mensaje: "El super usuario se creo correctamente"
         });
     } catch (error) {
         console.log(error);
         res.status(404).json({
             mensaje: "Error al crear el SuperUsuario"
         });
     }
};

export default superUserCtrl;