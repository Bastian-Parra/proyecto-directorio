import express from 'express'
import cors from 'cors'
import db from './database/db.config.js'
import routesAuth from './routes/auth.routes.js'
import routesNegocio from './routes/negocios.routes.js'
import routerEventos from './routes/eventos.routes.js'
import routerLugar from './routes/lugares.routes.js'
/*import routerTareas from './routes/tareas.negocios.routes.js' */
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import routerConsultas from './routes/consultas.routes.js'
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
app.use('/auth', routesAuth)
app.use('/negocios', routesNegocio)
app.use('/consultas', routerConsultas)
app.use('/eventos', routerEventos)
app.use('/lugares', routerLugar)
/*app.use('/tareas', routerTareas) */

const PORT = 4000

app.listen(PORT, () =>{
    console.log("listening on port http://localhost:" + PORT)
})