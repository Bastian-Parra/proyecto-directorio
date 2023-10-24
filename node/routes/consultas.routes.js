import mysql from 'mysql2/promise';
import express from 'express';

const router = express.Router();

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bd_proyecto',
};

router.post('/ejecutar', async (req, res) => {
  try {
    const { consulta } = req.body; // La consulta SQL enviada en el cuerpo de la solicitud

    // Conecta a la base de datos
    const connection = await mysql.createConnection(dbConfig);

    // Ejecuta la consulta SQL y obtén el resultado
    const [results] = await connection.execute(consulta);

    // Transforma los resultados en un arreglo
    const rows = Array.from(results);

    // Cierra la conexión a la base de datos
    connection.end();

    res.json({ resultado: rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
