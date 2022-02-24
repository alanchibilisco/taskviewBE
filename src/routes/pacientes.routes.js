import {Router} from 'express';
import pacientes from '../controllers/pacientes.controllers';

const router = Router();

router.route('/pacientes').get(pacientes.todoslosPacientes);

export default router;