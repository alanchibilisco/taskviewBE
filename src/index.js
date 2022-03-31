import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import routeSuperUser from './routes/superUser.routes';
import routeUsers from './routes/users.routes';
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
app.use('/movieapp', routeSuperUser);
app.use('/movieapp', routeUsers);