import { Router } from 'express'
import { authRequerida } from '../middlewares/validarToken.js'
import { subirImagenEvento } from '../controllers/eventoController.js'
import { AgregarEvento, obtenerEvento, obtenerEventos, eliminarEvento, actualizarEvento } from '../controllers/eventoController.js'

const router = Router()
// rutas para el dashboard de eventos
router.get('/eventos', authRequerida, obtenerEventos)
router.get('/eventos/:id', authRequerida, obtenerEvento)
router.post('/eventos/add', subirImagenEvento.single('imagen'), authRequerida, AgregarEvento)
router.delete('/eventos/delete/:id', eliminarEvento)
router.put('/eventos/update/:id', authRequerida, actualizarEvento)

export default router