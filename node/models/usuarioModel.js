import db from '../database/db.config.js'
import { DataTypes } from 'sequelize'

const Usuario = db.define('usuarios', {
  contraseña: {
    type: DataTypes.STRING,
  },
  correo_usuario: { 
    type: DataTypes.STRING,
    unique: true,
  },
  nombre_usuario: {
    type: DataTypes.STRING,
    unique: true,
  },
  rango: {
    type: DataTypes.STRING,
    defaultValue: "usuario",
  }
},{timestamps:false,});

db.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });

export default Usuario;
