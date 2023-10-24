import express from 'express';
import { obtenerNegocios, obtenerNegocio, addNegocio, SubirImagenes } from '../controllers/negociosController.js';
import { authRequerida } from '../middlewares/validarToken.js';

const router = express.Router();

router.get('/mostrar', obtenerNegocios)
router.get('/mostrar/:id',obtenerNegocio)
router.post('/add', addNegocio)

export default router