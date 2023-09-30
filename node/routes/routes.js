import express from 'express';
const router = express.Router()
import negocioController from '../controllers/negociosController.js'
import registroController from '../controllers/usuarioController.js'

router.get('/negocios', negocioController.obtenerNegocios);

router.post('/registro', async (req, res) => {
  const { nombre_usuario, contraseña, correo_usuario } = req.body;

  try {
    // Verificar si existe un usuario en la bd
    const usuarioExistente = await registroController.verificarExistenciaUsuario(nombre_usuario, correo_usuario);

    if (usuarioExistente) {
      return res.status(400).json({ success: false, message: 'El nombre de usuario ya está en uso' });
    }

    // Registrar un nuevo usuario en la bd
    await registroController.registrarUsuario(nombre_usuario, contraseña, correo_usuario);

    res.json({ success: true, message: 'Registro exitoso' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ success: false, message: 'Error en el registro' });
  }
});

export default router;
