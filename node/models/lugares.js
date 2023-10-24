import { DataTypes } from "sequelize";
import db from "../database/db.config.js";

const Lugar = db.define('lugares', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    id_reseña: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Resena', // Reemplaza 'Resena' por el nombre de tu modelo de reseña si es diferente
            key: 'id',
        },
    },
    id_ubicacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Ubicacion', // Reemplaza 'Ubicacion' por el nombre de tu modelo de ubicación si es diferente
            key: 'id',
        },
    },
    nombre_lugar: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    direccion_lugar: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
});

export default Lugar;