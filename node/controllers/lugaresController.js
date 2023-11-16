import { Sequelize } from "sequelize";
import Lugar from '../models/lugares.js';
import multer from 'multer';

export const obtenerLugares = async (req, res) => {
    try {
        const lugares = await  Lugar.findAll()
        res.json(lugares)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al obtener lugares'})
    }
}

export const obtenerLugar = async (req, res) => {
    const lugar = await Lugar.findByPk(req.params.id)

    if (!lugar) return res.status(404).json({message: "Lugar no encontrado"})
    
    console.log(lugar)
    res.json(lugar)
}

export const AgregarLugar = async (req, res) => {
    try {
        const {id_reseña, id_ubicacion, nombre_lugar, direccion_lugar} = req.body;
    
    const lugarExistente = await verificarLugar(nombre_lugar, id_reseña)

    if (lugarExistente) {
        return res.status(409).json({message: "El lugar ya existe"})
    }

    // se llama a la funcion para crear el negocio
    await crearLugar(id_reseña, id_ubicacion, nombre_lugar, direccion_lugar)

    res.status(200).json({ success: true, message: 'Lugar creado exitosamente' });

    } catch (error) {
        console.error('Error al crear un lugar', error)
        res.status(500).json({ success: false, error: 'Error al crear un lugar'})
    }
}

export const crearLugar = async (param_id_reseña, param_id_ubicacion, param_nombre_lugar, param_direccion_lugar) => {

    try {
        await Lugar.create({
            id_reseña: param_id_reseña,
            id_ubicacion: param_id_ubicacion,
            nombre_lugar: param_nombre_lugar,
            direccion_lugar: param_direccion_lugar,
        })
    } catch (error) {
        throw error
    }
}


export const verificarLugar = async (nombre_lugar, idreseña) => {
    try {
        const lugar = await Lugar.findOne({
            where: {
              [Sequelize.Op.or]: [
                { nombre_lugar: nombre_lugar }, 
                { id_reseña: idreseña },
              ],
            },
        })
        return !!lugar
    } catch (error) {
        throw error
    }
}

export const actualizarLugar = async (req, res) => {
    try {
        const lugar = await Lugar.findByPk(req.params.id)
        
        if (!lugar) return res.status(400).json({message: "Lugar no encontrado"})
        
        const {id_reseña, id_ubicacion, nombre_lugar, direccion_lugar} = req.body;
        
        const lugarExistente = await verificarLugar(nombre_lugar, id_reseña, id_ubicacion)
        
        if (lugarExistente) {
            return res.status(400).json({message: "Lugar existente encontrado"})
        }
        
        await lugar.update({
            id_reseña: id_reseña,
            id_ubicacion: id_ubicacion,
            nombre_lugar: nombre_lugar,
            direccion_lugar: direccion_lugar,
        })
        
        res.status(200).json({ success: true, message: 'Lugar actualizado exitosamente' });
        
    } catch (error) {
        console.error('Error al actualizar un lugar', error)
        res.status(500).json({ success: false, error: 'Error al actualizar un lugar'})
    }
}

export const eliminarLugar = async (req, res) => {
    try {
        const lugar = await Lugar.findByPk(req.params.id)
        
        if (!lugar) return res.status(400).json({message: "Lugar no encontrado"})
        
        await lugar.destroy()
        
        res.status(200).json({ success: true, message: 'Lugar eliminado exitosamente' });
        
    } catch (error) {
        console.error('Error al eliminar un lugar', error)
        res.status(500).json({ success: false, error: 'Error al eliminar un lugar'})
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
