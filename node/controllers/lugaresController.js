import { Sequelize } from "sequelize";
import Lugar from '../models/lugares.js';
import multer from 'multer';

export const obtenerLugares = async (req, res) => {
    try {
        const lugares = await Lugar.findAll();
        res.json(lugares);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener lugares' });
    }
};

export const obtenerLugar = async (req, res) => {
    const lugar = await Lugar.findByPk(req.params.id);

    if (!lugar) return res.status(404).json({ message: "Lugar no encontrado" });

    res.json(lugar);
};

export const agregarLugar = async (req, res) => {
    try {
        const { nombre, direccion, descripcion, id_ubicacion } = req.body;

        const lugarExistente = await verificarLugar(nombre, id_ubicacion);

        if (lugarExistente) {
            return res.status(409).json({ message: "El lugar ya existe" });
        }

        // Llama a la función para crear el lugar
        await crearLugar(nombre, direccion, descripcion, id_ubicacion);

        res.status(200).json({ success: true, message: 'Lugar creado exitosamente' });
    } catch (error) {
        console.error('Error al crear un lugar', error);
        res.status(500).json({ success: false, error: 'Error al crear un lugar' });
    }
};

export const crearLugar = async (param_nombre, param_direccion, param_descripcion, param_id_ubicacion) => {
    try {
        await Lugar.create({
            nombre: param_nombre,
            direccion: param_direccion,
            descripcion: param_descripcion,
            id_ubicacion: param_id_ubicacion,
        });
    } catch (error) {
        throw error;
    }
};

export const verificarLugar = async (nombre_lugar, id_ubicacion) => {
    try {
        const lugar = await Lugar.findOne({
            where: {
                [Sequelize.Op.and]: [
                    { nombre: nombre_lugar },
                    { id_ubicacion: id_ubicacion },
                ],
            },
        });
        return !!lugar;
    } catch (error) {
        throw error;
    }
};

export const actualizarLugar = async (req, res) => {
    try {
        const lugar = await Lugar.findByPk(req.params.id);

        if (!lugar) return res.status(400).json({ message: "Lugar no encontrado" });

        const { nombre, direccion, descripcion, id_ubicacion } = req.body;

        const lugarExistente = await verificarLugar(nombre, id_ubicacion);

        if (lugarExistente) {
            return res.status(400).json({ message: "Lugar existente encontrado" });
        }

        await lugar.update({
            nombre: nombre,
            direccion: direccion,
            descripcion: descripcion,
            id_ubicacion: id_ubicacion,
        });

        res.status(200).json({ success: true, message: 'Lugar actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar un lugar', error);
        res.status(500).json({ success: false, error: 'Error al actualizar un lugar' });
    }
};

export const eliminarLugar = async (req, res) => {
    try {
        const lugar = await Lugar.findByPk(req.params.id);

        if (!lugar) return res.status(400).json({ message: "Lugar no encontrado" });

        await lugar.destroy();

        res.status(200).json({ success: true, message: 'Lugar eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar un lugar', error);
        res.status(500).json({ success: false, error: 'Error al eliminar un lugar' });
    }
};

export const AlmacenarImagenes = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
});

export const SubirImagenes = multer({
    storage: AlmacenarImagenes,
    limits: { fileSize: 1024 * 1024 * 10 },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(file.originalname);

        if (mimetype && extname) {
            cb(null, true)
        } else {
            cb(null, false)
        }
    }
}).single('imagen')

