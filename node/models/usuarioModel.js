// se importa la conexion a la db

import db from '../database/db.config.js'
import { DataTypes } from 'sequelize'

const AppModel = db.define('usuarios', {
    contraseña: {type: DataTypes.STRING},
    nombre_usuario: {type: DataTypes.STRING},
    correo_usuario: {type: DataTypes.STRING},
}, {timestamps:false,})

export default AppModel