
import mongoose from 'mongoose'

const eventoSchema = mongoose.Schema({
    
    direccion_evento: {
        type : String
    },
    nombre_evento: {
        type : String
    },
    fecha_hora: {
        type : String
    },
    descripcion_evento: {
        type: String
    },
    imagen: {
        type: String
    }
})

export default mongoose.model("Evento", eventoSchema, "eventos")