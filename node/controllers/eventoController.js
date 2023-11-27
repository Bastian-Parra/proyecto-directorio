import Evento from '../models/eventosModel.js'; // Importando el modelo de Mongoose
import { validarEvento } from '../schemas/addEventoSchema.js'; // Importando y renombrando el esquema de addEventoSchema
import multer from 'multer';

export const obtenerEventos = async (req, res) => {
    try {
        const eventos = await Evento.find();
        console.log(eventos);
        res.json(eventos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener eventos' });
    }
};

export const obtenerEvento = async (req, res) => {
    try {
        const evento = await Evento.findById(req.params.id);
        if (!evento) return res.status(400).json({ message: "Evento no encontrado" });
        res.json(evento);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener el evento' });
    }
};

export const eliminarEvento = async (req, res) => {
    try {
        const evento = await Evento.findByIdAndDelete(req.params.id);
        if (!evento) return res.status(400).json({ message: "Evento no encontrado" });
        res.status(200).json({ success: true, message: 'Evento eliminado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al eliminar el evento' });
    }
};

export const actualizarEvento = async (req, res) => {
    try {
        const evento = await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!evento) return res.status(404).json({ message: "Evento no encontrado" });
        res.status(200).json({ success: true, message: 'Evento actualizado exitosamente', evento });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar el evento' });
    }
};

export const AgregarEvento = async (req, res) => {
    try {
        const { error } = validarEvento(req.body);
        if (error) return res.status(400).json({ mensaje: 'Datos inválidos', detalles: error.details });

        let nuevoEvento = new Evento(req.body); // Usando el modelo Evento aquí
        nuevoEvento = await nuevoEvento.save();
        res.status(201).json(nuevoEvento);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error al crear el evento', detalles: error });
    }
};

export const verificarEvento = async (nombre_evento, direccion_evento) => {
    try {
        const evento = await Evento.findOne({ nombre_evento: nombre_evento, direccion_evento: direccion_evento });
        return !!evento;
    } catch (error) {
        throw error;
    }
};

const almacenarImagen = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images/eventos_images/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

export const subirImagenEvento = multer({ storage: almacenarImagen });