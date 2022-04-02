import mongoose, {Schema} from "mongoose";

const taskSchema=new Schema({
    UUID:{
        type: String,
        required: true,
        unique: true
    },
    title:{
        type: String,
        required: true
    }
});

const Task=mongoose.model("task",taskSchema);

export default Task;