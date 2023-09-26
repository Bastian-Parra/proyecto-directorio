import AppModel from "../models/usuarioModel.js"

//metodos crud:

// mostrar todos los registros
const obtenerElementos = async (req, res) => {
    try {
        const elementos = await AppModel.findAll()
        res.json(elementos)
    } catch (error) {
        res.json( {message: error.message})
    }
}
// mostrar un registro
const obtenerUnElemento = async (req, res) => {
    try {
        const elemento = await AppModel.findAll({
            where: { id_usuario: req.params.id_usuario }
        })
        res.json(elemento[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}
// crear un registro
const crearElemento = async (req, res) => {
    try {
        await AppModel.create(req.body)
        res.json({"message":"Registro creado correctamente"})
    } catch (error) {
        res.json( {message: error.message})
    }
}

// actualizar un registro
const updateElemento = async (req, res) => {
    try {
        await AppModel.update(req.body, {
            where: {id_usuario:req.params.id_usuario}
        })
        res.json({"message":"Registro actualizado correctamente"})
    } catch (error) {
        res.json( {message: error.message})  
    }
}

// eliminar un registro

const eliminarElemento = async (req, res) => {
    try {
        await AppModel.destroy({where: {id_usuario:req.params.id_usuario}})
        res.json({"message":"Registro eliminado correctamente"})
    } catch (error) {
        res.json( {message: error.message}) 
    }
}

export {eliminarElemento, updateElemento, crearElemento, obtenerElementos, obtenerUnElemento}
