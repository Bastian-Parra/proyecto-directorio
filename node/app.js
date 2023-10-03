import express from 'express'
import cors from 'cors'
import db from './database/db.config.js'
import Evento from './models/Eventos.js';
import routes from './routes/routes.js'
import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())

try {
    await db.authenticate()
    console.log("Conexion exitosa a la DB")
} catch (error) {
    console.error("Error al conectar con la DB: " + error)
}

app.get('../Eventos.js', async (req, res) => {
    try {
      const eventos = await Evento.findAll(); // se obtienen los eventos de la base de datos
      res.json(eventos);
    } catch (error) {
      console.error('Error al obtener eventos:', error);
      res.status(500).json({ error: 'Error al obtener eventos' });
    }
});

app.use('/', routes)

const PORT = 5000
app.listen(PORT, () =>{
    console.log("listening on port http://localhost:" + PORT)
})