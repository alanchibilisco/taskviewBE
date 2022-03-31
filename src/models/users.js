import mongoose, {Schema}  from "mongoose";

const usersSchema=new Schema({

    userName:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        maxlength: 16
    },
    favoriteFilms:{
        type: Array,
        required: true
    }
});
const Users=mongoose.model("users", usersSchema);

export default Users;