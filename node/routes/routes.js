import express from 'express';
// aqui se importan todos los controladores (mantener algo de orden para evitar confusiones)
import negocioController from '../controllers/negociosController.js'
import { authRequerida } from '../middlewares/validarToken.js';
import {login, logout, register, verificarUsuario, profile, verificarToken} from '../controllers/authController.js'
import { validarSchema } from '../middlewares/validarDatos.js';
import { registerSchema, loginSchema } from '../schemas/authSchema.js';
import { crearTokenDeAcceso } from '../libs/jwt.js';
const router = express.Router()

// ruta de negocios en proceso
router.get('/negocios', negocioController.obtenerNegocios);

// authRequerida funciona como un guardia de seguridad que te solicita una autorizacion para entrar a una pagina
router.get('/profile', authRequerida, profile)

//verificar token del cliente
router.get('/token', verificarToken)

// esta ruta es para las consultas del login (verificacion de usuario, contrasena y dar la respuesta en forma de un token)
router.post('/login', validarSchema(loginSchema), login)

// esta ruta es para las consultas del registro

// NOTA A FUTURO: ESTA RUTA REGISTER HAY QUE CAMBIARLA PARA QUE EL CODIGO QUE ESTE EN SU INTERIOR ESTE EN OTRO ARCHIVO!!!
router.post('/register', validarSchema(registerSchema), async (req, res) => {
  // se requieren los parametros que se utilizaran al body
  const { nombre_usuario, contraseña, correo_usuario } = req.body;

  try {
    // usamos la funcion creada en loginController para verificar la existencia de un usuario y pasamos los parametros solicitados
    const usuarioExistente = await verificarUsuario(nombre_usuario, correo_usuario);

    // si el usuario exite, enviar un mensaje con el error especifico
    if (usuarioExistente) {
      return res.status(400).json(["El usuario ya esta en uso"])
    }

    // si el usuario no existe, registrar un nuevo usuario en la bd
    await register(nombre_usuario, contraseña, correo_usuario);
  
    const token = await crearTokenDeAcceso({usuarioId: nombre_usuario.id})
       res.cookie('token', token)
       res.json({
        id: nombre_usuario.id,
        nombre: nombre_usuario,
        correo: correo_usuario,
       })

  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ success: false, message: 'Error en el registro' });
  }
});


router.post('/logout', logout)


export default router;
