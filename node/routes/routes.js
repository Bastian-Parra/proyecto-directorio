import express from 'express';
const router = express.Router()
const {obtenerHome, obtenerNegocios, obtenerEventos, obtenerLugares, obtenerLogin} = require('../controllers/pagesController.js')

router.get('/', obtenerHome)
router.get('/negocios',obtenerNegocios)
router.get('/eventos', obtenerEventos)
router.get('/lugares', obtenerLugares)
router.get('/login', obtenerLogin)
module.exports = router