import { DataTypes } from 'sequelize';
import db from '../database/db.config.js';

const Evento = db.define('Evento', {
  id_ubicacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  direccion_evento: {
    type: DataTypes.STRING(70), // Longitud de 70 caracteres
    allowNull: false,
    collate: 'utf8mb4_general_ci',
  },
  nombre_evento: {
    type: DataTypes.STRING(70), // Longitud de 70 caracteres
    allowNull: false,
    collate: 'utf8mb4_general_ci',
  },
  fecha_hora: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Evento;