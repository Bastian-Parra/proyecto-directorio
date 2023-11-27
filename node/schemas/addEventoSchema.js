import mongoose from 'mongoose';

// Definiendo el esquema para agregar un evento
const addEventoSchema = new mongoose.Schema({
    direccion_evento: {
        type: String,
        required: true,
        trim: true // elimina espacios en blanco al principio y al final
    },
    nombre_evento: {
        type: String,
        required: true,
        trim: true
    },
    fecha_hora: {
        type: Date,
        required: true
    },
    descripcion_evento: {
        type: String,
        required: true,
        trim: true
    },
    imagen: {
        type: String,
        required: false // asumiendo que la imagen no es obligatoria
    }
});

// Exportando el esquema
export default addEventoSchema;