import Evento from '../models/eventosModel.js'
import multer from 'multer'

export const obtenerEventos = async (req, res) => {
    try {
        const eventos = await  Evento.find()
        console.log(eventos)
        res.json(eventos)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al obtener eventos'})
    }
}

export const obtenerEvento = async (req, res) => {
    const evento = await Evento.findById(req.params.id)
    
    if (!evento) return res.status(400).json({message: "Evento no encontrado"})

    res.json(evento)
}

export const eliminarEvento = async (req, res) => {
    try {
        const evento = await Evento.findByIdAndDelete(req.params.id)
        
        if (!evento) return res.status(400).json({message: "Evento no encontrado"})
        
        res.status(200).json({ success: true, message: 'Evento eliminado exitosamente' });
        
    } catch (error) {
        console.error('Error al eliminar un evento', error)
        res.status(500).json({ success: false, error: 'Error al eliminar un evento'})
    }
}

export const actualizarEvento = async (req, res) => {
    try {
        const evento = await Evento.findByIdAndUpdate(req.params.id, req.body)
        
        if(!evento) return res.status(404).json(["Evento no encontrado"])
        
        res.status(200).json({ success: true, message: 'Evento actualizado exitosamente' });
        
    } catch (error) {
        console.error('Error al actualizar un evento', error)
        res.status(500).json({ success: false, error: 'Error al actualizar un evento'})
    }
}

export const crearEvento = async (direccion_evento, nombre_evento, fecha_hora, descripcion_evento, imagenPath) => {

    try {
        const nuevoEvento = await new Evento({
          direccion_evento: direccion_evento,
          nombre_evento: nombre_evento,
          fecha_hora: fecha_hora,
          descripcion_evento: descripcion_evento,
          imagen: imagenPath,
        })

        await nuevoEvento.save()

    } catch (error) {
        throw error
    }
}

export const AgregarEvento = async (req, res) => {
    try {
        const {direccion_evento, nombre_evento, fecha_hora, descripcion_evento} = req.body;
        const imagenPath = req.file.filename
    
    const eventoExistente = await verificarEvento(nombre_evento, direccion_evento)

    if (eventoExistente) {
        return res.status(400).json(["El evento ya existe!"])
    }

    // se llama a la funcion para crear el negocio
    await crearEvento(direccion_evento, nombre_evento, fecha_hora, descripcion_evento, imagenPath)

    res.status(200).json({ success: true, message: 'Evento creado exitosamente' });
    } catch (error) {
        console.error('Error al crear un evento', error)
        res.status(500).json({ success: false, error: 'Error al crear un evento'})
    }
}

export const verificarEvento = async (nombre_evento, direccion_evento) => {
    try {
        const evento = await Evento.findOne({nombre_evento: nombre_evento, direccion_evento: direccion_evento})
        return !!evento
    } catch (error) {
        throw error
    }
}

const almacenarImagen = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images/eventos_images/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
})

export const subirImagenEvento = multer({storage: almacenarImagen})