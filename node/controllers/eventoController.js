import Evento from '../models/eventosModel.js'
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

export const eliminarEvento = async (req, res) => {
    try {
        const evento = await Evento.findByPk(req.params.id)
        
        if (!evento) return res.status(400).json({message: "Evento no encontrado"})
        
        await evento.destroy()
        
        res.status(200).json({ success: true, message: 'Evento eliminado exitosamente' });
        
    } catch (error) {
        console.error('Error al eliminar un evento', error)
        res.status(500).json({ success: false, error: 'Error al eliminar un evento'})
    }
}

export const actualizarEvento = async (req, res) => {
    try {
        const evento = await Evento.findByPk(req.params.id)
        
        if (!evento) return res.status(400).json({message: "Evento no encontrado"})
        
        const {direccion_evento, nombre_evento, fecha_hora, descripcion_evento} = req.body;
        
        const eventoExistente = await verificarEvento(nombre_evento, direccion_evento)
        
        if (eventoExistente && eventoExistente.id !== evento.id) {
            return res.status(400).json({message: "Evento encontrado con mismo nombre"})
        }
        
        await evento.update({
            direccion_evento: direccion_evento,
            nombre_evento: nombre_evento,
            descripcion_evento: descripcion_evento,
            fecha_hora: fecha_hora,
        })
        
        res.status(200).json({ success: true, message: 'Evento actualizado exitosamente' });
        
    } catch (error) {
        console.error('Error al actualizar un evento', error)
        res.status(500).json({ success: false, error: 'Error al actualizar un evento'})
    }
}

export const crearEvento = async (direccion_evento, nombre_evento, fecha_hora, descripcion_evento) => {

    try {
        await Evento.create({
          direccion_evento: direccion_evento,
          nombre_evento: nombre_evento,
          fecha_hora: fecha_hora,
          descipcion_evento: descripcion_evento,
        })
    } catch (error) {
        throw error
    }
}

export const AgregarEvento = async (req, res) => {
    try {
        const {direccion_evento, nombre_evento, fecha_hora, descipcion_evento} = req.body;
    
        const eventoExistente = await verificarEvento(nombre_evento, direccion_evento)

        if (eventoExistente) {
            return res.status(400).json({message: "El evento ya existe"})
        }

        // se llama a la funcion para crear el evento
        await crearEvento(direccion_evento, nombre_evento, fecha_hora, descipcion_evento, req.file.path)

        res.status(200).json({ success: true, message: 'Evento creado exitosamente' });
    } catch (error) {
        console.error('Error al crear un evento', error)
        res.status(500).json({ success: false, error: 'Error al crear un evento'})
    }
}

export const verificarEvento = async (nombre_evento, direccion_evento) => {
    try {
        const evento = await Evento.findOne({
            where: {
              [Sequelize.Op.or]: [
                { nombre: nombre_evento }, 
                { direccion: direccion_evento },
              ],
            },
        })
        return !!evento
    } catch (error) {
        throw error
    }
}

/*
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

*/