import Evento from '../models/eventosModel.js'
import multer from 'multer'

/*import schema evento*/
import addEventoSchema from '../schemas/addEventoSchema.js';

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
        throw error
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

export const agregarEvento = async (req, res) => {
    // Validación de los datos de entrada
    const { error } = addEventoSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ mensaje: 'Datos inválidos', detalles: error.details });
    }

    // Crear y guardar el nuevo evento
    try {
        const nuevoEvento = new Evento(req.body);
        await nuevoEvento.save();
        res.status(201).json(nuevoEvento);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el evento', detalles: error });
    }
};

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