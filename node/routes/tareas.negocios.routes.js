import {Router} from 'express'

import { authRequerida } from '../middlewares/validarToken.js'
import {addNegocio, obtenerNegocio, obtenerNegocios, eliminarNegocio, actualizarNegocio} from '../controllers/negociosController.js'
const router = Router()

router.get('/tareas', authRequerida, obtenerNegocios)
router.get('/tareas/:id', authRequerida, obtenerNegocio)
router.post('/tareas', authRequerida, addNegocio)
router.delete('/tareas/:id', eliminarNegocio)
router.put('/tareas/:id', authRequerida, actualizarNegocio)

export default router
