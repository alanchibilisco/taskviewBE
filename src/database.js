import mongoose from "mongoose";

 const url='mongodb://localhost:27017/BBDDMA';
// const url='mongodb+srv://rollingvetproject:cEnGmY39J9R9XZ99@cluster0.npbgn.mongodb.net/BBDDRV'

mongoose.connect(url);

const connection=mongoose.connection;

connection.once('open', ()=>{
    console.log("BBDD MA CONECTADA");
})