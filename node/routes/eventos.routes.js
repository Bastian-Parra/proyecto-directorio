import express from 'express';
import { obtenerEvento, obtenerEventos, SubirImagenes, addEvento } from '../controllers/eventoController.js';

const router = express.Router();

router.get('/mostrar', obtenerEventos);
router.get('/mostrar/:id', obtenerEvento);
router.post('/add',SubirImagenes, addEvento)

export default router;