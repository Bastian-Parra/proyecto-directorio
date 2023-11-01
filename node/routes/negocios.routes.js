import express from 'express';
import { obtenerNegocios, obtenerNegocio, AgregarNegocio } from '../controllers/negociosController.js';
import { authRequerida } from '../middlewares/validarToken.js';

const router = express.Router();

router.get('/mostrar', obtenerNegocios)
router.get('/mostrar/:id',obtenerNegocio)
router.post('/add', authRequerida, AgregarNegocio)

export default router