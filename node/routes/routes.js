import express from 'express';
const router = express.Router()
import {obtenerElementos, obtenerUnElemento, crearElemento, updateElemento, eliminarElemento} from '../controllers/usuarioController.js'

router.get('/', obtenerElementos)
router.get('/:id', obtenerUnElemento)
router.post('/', crearElemento)
router.put('/:id', updateElemento)
router.delete('/:id', eliminarElemento)

export default router