import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

//espress
const app = express();
//puerto
app.set('port', process.env.PORT || 3004 );

app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto'+ ''+ app.get('port'));
})

//midlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'../public')))

console.log(__dirname)
console.log()

//ruta prueba
app.get('/pacientes',(rep,res)=>{
    res.send('prueba ruta pacientes')
})