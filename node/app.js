import express from 'express'
import cors from 'cors'
import db from './database/db.config.js'

const PORT = 5000
const app = express()

app.use(cors())
app.use(express.json())

try {
    await db.authenticate()
    console.log("Conexion exitosa a la DB")
} catch (error) {
    console.error("Error al conectar con la DB: " + error)
}

app.get('/', (req, res) =>{
    res.send("Hola Mundo")
})

app.listen(PORT, () =>{
    console.log("listening on port http://localhost:" + PORT)
})