import db from '../database/db.config.js'
import { DataTypes } from 'sequelize'

const Evento = db.define('eventos' , {
    
    direccion_evento: {type : DataTypes.STRING},
    nombre_evento: {type : DataTypes.STRING},
    fecha_hora: {type : DataTypes.DATE},
    descripcion_evento: {type : DataTypes.STRING},
    
}, {timestamps:false,})


export default Evento