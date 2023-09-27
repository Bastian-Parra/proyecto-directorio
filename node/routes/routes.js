import express from 'express';
const router = express.Router()
const {obtenerHome, obtenerNegocios, obtenerEventos, obtenerLugares} = require('../controllers/pagesController.js')

router.get('/', obtenerHome)
router.get('/negocios',obtenerNegocios)
router.get('/eventos', obtenerEventos)
router.get('/lugares', obtenerLugares)

module.exports = router