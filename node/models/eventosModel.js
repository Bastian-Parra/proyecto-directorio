import db from '../database/db.config.js'
import { DataTypes } from 'sequelize'

const Evento = db.define('eventos' , {
    
    direccion_evento: {type : DataTypes.STRING},
    nombre_evento: {type : DataTypes.STRING},
    fecha_hora: {type : DataTypes.STRING},
    id_ubicacion: {type : DataTypes.INTEGER},

}, {timestamps:false,})


export default Evento