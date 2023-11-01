import { DataTypes } from "sequelize"

import db from "../database/db.config.js"

const Lugar = db.define('lugares', {

    id_reseña: DataTypes.INTEGER,
    id_ubicacion: DataTypes.INTEGER,
    nombre_lugar: DataTypes.INTEGER,
    direccion_lugar: DataTypes.STRING,

}, {timestamps:false,})


export default Lugar;