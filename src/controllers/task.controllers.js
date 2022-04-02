import Task from "../models/task";
import { v4 as uuidv4 } from "uuid";
import fetch from "cross-fetch";

let titleRes;
const response = async () => {
  const res = await fetch(
    "https://hipsum.co/api/?type=hipster-centric&sentences=1"
  );
  const resText = await res.json();  
  titleRes = resText[0];
};

response();

const taskCtrl = {};
let taskList=[];

taskCtrl.getTask = async (req, res) => {
  try {
    const newTask = new Task({
        UUID: uuidv4(),
        title: titleRes,
      });
      const newTask1=new Task({
          UUID: uuidv4(),
          title: titleRes
      });
      const newTask2=new Task({
          UUID: uuidv4(),
          title: titleRes
      });
     if (taskList.length===3) {
         taskList=[];
     }
      taskList.push(newTask, newTask1, newTask2);
    res.status(200).json(taskList);    
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error en la respuesta",
    });
  }
};

taskCtrl.putTask=async (req, res)=>{
    try {
        if (req.body.list.length<3) {
            const newTask=new Task({
                UUID: uuidv4(),
                title: titleRes
            });    
            res.status(200).json(newTask);
        }    
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al actualizar la lista de tareas"
        })
    }
}

export default taskCtrl;
