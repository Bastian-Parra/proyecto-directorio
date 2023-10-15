import express from 'express'
import cors from 'cors'
import db from './database/db.config.js'
import routes from './routes/routes.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

try {
    await db.authenticate()
    console.log("Conexion exitosa a la DB")
} catch (error) {
    console.error("Error al conectar con la DB: " + error)
}

app.use('/', routes)

const PORT = 3000
app.listen(PORT, () =>{
    console.log("listening on port http://localhost:" + PORT)
})