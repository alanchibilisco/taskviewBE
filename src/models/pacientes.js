import mongoose, {Schema} from 'mongoose';

const pacienteSchema=new Schema({

    nombreDueño:{
        type: String,
        required: true,
        maxlength: 100,
        minlength: 4
    },

    apellidoDueño:{
        type: String,
        required: true,
        maxlength: 100,
        minlength: 4
    },

    email:{
        type: String,
        required: true,
        maxlength: 100,
        minlength: 12,
        unique: true
    },

    telefono:{
        type: String,
        required: true,
        minlength: 7,
        maxlength: 10
    },

    nombreMascota:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    especieMascota:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    razaMascota:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50

    }


});

const Paciente=mongoose.model('paciente', pacienteSchema);
export default Paciente;