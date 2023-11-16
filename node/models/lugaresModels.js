import { DataTypes } from "sequelize"

import db from "../database/db.config.js"

const Lugar = db.define('lugar_interes', {

    id_reseña: {type : DataTypes.INTEGER},
    id_ubicacion: {type : DataTypes.INTEGER},
    nombre_lugar: {type : DataTypes.STRING},
    direccion_lugar: {type : DataTypes.STRING},

}, {timestamps:false,})


export default Lugar;