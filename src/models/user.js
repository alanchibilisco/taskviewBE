import mongoose, {Schema} from "mongoose";


const userSchema=new Schema({
    userName:{
        type: String,
        required: true,
        minlength: 60,
        maxlength: 60,
        unique: true
    },

    pass:{
        type: String,
        required: true,
        minlength: 60,
        maxlength: 60,
        unique: true
    }
});

const User=mongoose.model('user', userSchema);

export default User;