import Negocio from '../models/negociosModels.js'

const obtenerNegocios = async (req, res) => {
    try {
        const usuarios = await Negocio.findAll()
        res.json(usuarios)
    } catch (error) {
        console.error("Error al obtener los negocios: ", error)
        res.status(500).json({error: 'Error al obtener negocios'})
    }
}

export default {obtenerNegocios}
