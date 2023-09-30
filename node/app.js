import express from 'express'
import cors from 'cors'
import db from './database/db.config.js'
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

app.use('/', routes)

const PORT = 5000
app.listen(PORT, () =>{
    console.log("listening on port http://localhost:" + PORT)
})