import Negocio from '../models/negociosModels.js'
import { Sequelize } from "sequelize"

export const obtenerNegocios = async (req, res) => {
    try {
        const negocios = await  Negocio.findAll()
        console.log(negocios)
        res.json(negocios)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error al obtener negocios'})
    }
}

export const obtenerNegocio = async (req, res) => {
    const negocio = await Negocio.findByPk(req.params.id)
    
    if (!negocio) return res.status(400).json({message: "Negocio no encontrado"})

    res.json(negocio)
}

export const crearNegocio = async (param_tipo_negocio, param_H_operacion, param_descripcion, param_nombre, param_direccion, param_telefono, param_correo, param_id_ubicacion) => {

    try {
        await Negocio.create({
            tipo_negocio: param_tipo_negocio,
            H_operacion: param_H_operacion,
            descripcion: param_descripcion,
            nombre: param_nombre,
            direccion: param_direccion,
            telefono: param_telefono,
            correo: param_correo,
            id_ubicacion: param_id_ubicacion,
        })
    } catch (error) {
        throw error
    }
}

export const addNegocio = async (req, res) => {
    try {
        const {tipo_negocio, H_operacion, descripcion, nombre, direccion, telefono, correo, id_ubicacion} = req.body;
    
    const negocioExistente = await verificarNegocio(nombre, tipo_negocio, id_ubicacion)

    if (negocioExistente) {
        return res.status(400).json({message: "El negocio ya existe"})
    }

    await crearNegocio(tipo_negocio, H_operacion, descripcion, nombre, direccion, telefono, correo, id_ubicacion)
    } catch (error) {
        console.error('Error al crear un negocio', error)
        res.status(500).json({ success: false, error: 'Error al crear un negocio'})
    }
}

export const verificarNegocio = async (nombre_negocio, tipoNegocio,idUbicacion) => {
    try {
        const negocio = await Negocio.findOne({
            where: {
              [Sequelize.Op.or]: [
                { nombre: nombre_negocio }, 
                { tipo_negocio: tipoNegocio },
                { id_ubicacion: idUbicacion },
              ],
            },
        })
        return !!negocio
    } catch (error) {
        throw error
    }
}

