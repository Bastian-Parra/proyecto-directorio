import db from '../database/db.config.js'
import { DataTypes } from 'sequelize'

const Negocio = db.define('negocios' , {
    tipo_negocio: {type : DataTypes.STRING},
    H_operacion: {type : DataTypes.STRING},
    descripcion: {type : DataTypes.STRING},
    nombre: {type : DataTypes.STRING},
    direccion: {type : DataTypes.STRING},
    telefono: {type : DataTypes.STRING},
    correo: {type : DataTypes.STRING},
    id_ubicacion: {type : DataTypes.INTEGER},
}, {timestamps:false,})

export default Negocio