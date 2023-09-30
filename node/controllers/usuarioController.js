import { Sequelize } from "sequelize";
import registroModel from "../models/usuarioModel.js";

async function verificarExistenciaUsuario(nombre, correo) {
  try {
    const usuario = await registroModel.findOne({
      where: {
        [Sequelize.Op.or]: [
          { nombre_usuario: nombre }, 
          { correo_usuario: correo }, 
        ],
      },
    });
    return !!usuario;
  } catch (error) {
    throw error;
  }
}

async function registrarUsuario(nombre, contraseña, correo) {
  try {
    await registroModel.create({
      nombre_usuario: nombre,
      contraseña: contraseña, 
      correo_usuario: correo, 
    });
  } catch (error) {
    throw error;
  }
}

export default { verificarExistenciaUsuario, registrarUsuario };