import Negocio from '../models/eventosModel.js'
import { Sequelize } from "sequelize"
import multer from 'multer'

export const obtenerEventos = async (req, res) => {
    try {
        const eventos = await  Evento.findAll()
        console.log(eventos)
        res.json(eventos)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al obtener eventos'})
    }
}

export const obtenerEvento = async (req, res) => {
    const evento = await Evento.findByPk(req.params.id)
    
    if (!evento) return res.status(400).json({message: "Evento no encontrado"})

    res.json(evento)
}

export const crearEvento = async (param_direccion_evento, param_nombre_evento, param_fecha_hora, param_id_ubicacion) => {

    try {
        await Negocio.create({
          
          direccion_evento: param_direccion_evento,
          nombre_evento: param_nombre_evento,
          fecha_hora: param_fecha_hora,
          id_ubicacion: param_id_ubicacion,
        })
    } catch (error) {
        throw error
    }
}

export const addEvento = async (req, res) => {
    try {
        const {id_ubicacion, direccion_evento, nombre_evento, fecha_hora} = req.body;
    
    const eventoExistente = await verificarEvento(nombre_evento, direccion_evento, id_ubicacion)

    if (eventoExistente) {
        return res.status(400).json({message: "El evento ya existe"})
    }

    // se llama a la funcion para crear el negocio
    await crearNegocio(direccion_evento, nombre_evento, fecha_hora, id_ubicacion, req.file.path)

    res.status(200).json({ success: true, message: 'Evento creado exitosamente' });
    } catch (error) {
        console.error('Error al crear un evento', error)
        res.status(500).json({ success: false, error: 'Error al crear un evento'})
    }
}

export const verificarEvento = async (nombre_evento, direccion_evento,id_ubicacion) => {
    try {
        const evento = await Evento.findOne({
            where: {
              [Sequelize.Op.or]: [
                { nombre: nombre_evento }, 
                { direccion: direccion_evento },
                { id_ubicacion: idUbicacion },
              ],
            },
        })
        return !!evento
    } catch (error) {
        throw error
    }
}


export const AlmacenarImagenes = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Images")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now(), file.originalname)
    }
})

export const SubirImagenes = multer({
    storage: AlmacenarImagenes,
    limits: {fileSize: 1024 * 1024 * 10},
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimetype = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimetype && extname) {
            cb(null, true)
        } else {
            cb(null, false)
        }
    }
}).single('imagen')