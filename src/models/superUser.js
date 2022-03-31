import mongoose, {Schema} from "mongoose";

const superUserSchema=new Schema({
userName:{
    type: String,
    required: true,
    unique: true
},
password:{
    type: String,
    required: true,
    minlength: 8,
    maxlength: 16,
    unique: true
}
});
const SuperUser=mongoose.model("superUser", superUserSchema);

export default SuperUser;