import express from 'express';
import { obtenerLugares, obtenerLugar, agregarLugar} from '../controllers/lugaresController.js';
import { authRequerida } from '../middlewares/validarToken.js';

const router = express.Router();

router.get('/mostrar', obtenerLugares);
router.get('/mostrar/:id', obtenerLugar);
router.post('/add', agregarLugar);

export default router;