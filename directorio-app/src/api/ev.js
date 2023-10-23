const express = require('express');
const app = express();
const port = 4000; // Puedes cambiar el puerto según tus necesidades

// Definir datos de ejemplo
const eventos = [
  {
    id: 1,
    nombre_evento: 'Evento 1',
    direccion_evento: 'Dirección 1',
    fecha_hora: 'Fecha y hora 1',
  },
  {
    id: 2,
    nombre_evento: 'Evento 2',
    direccion_evento: 'Dirección 2',
    fecha_hora: 'Fecha y hora 2',
  },
  // Agrega más eventos según sea necesario
];

app.get('/api/eventos', (req, res) => {
  res.json(eventos);
});

app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});