import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './routes/pacientes.routes';
import routeTurno from './routes/turnos.routes';
import routeUser from './routes/users.routes';
import routeComentario from './routes/comentarios.routes';
import './database'

//express
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

//ruta prueba
app.use('/apirollingvet', router);
app.use('/apirollingvet', routeTurno);
app.use('/apirollingvet', routeUser);
app.use('/apirollingvet', routeComentario);