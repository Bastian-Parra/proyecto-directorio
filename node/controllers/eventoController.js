import Evento from '../models/Eventos.js';

// Función para obtener todos los eventos
export const obtenerEventos = async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    res.json(eventos);
  } catch (error) {
    console.error('Error al obtener eventos:', error);
    res.status(500).json({ error: 'Error al obtener eventos' }); //Algo salió mal en la solicitud
  }
};