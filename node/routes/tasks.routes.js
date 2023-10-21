import express from 'express';
import { authRequerida } from '../middlewares/validarToken.js';
import { obtenerNegocios, obtenerNegocio, addNegocio } from '../controllers/negociosController.js';

const router = express.Router();

router.get('/mostrar', obtenerNegocios);
router.get('/mostrar/:id', obtenerNegocio);
router.post('/add', authRequerida, addNegocio)
export default router