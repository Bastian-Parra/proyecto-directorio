import axios from '../api/axios.js'

// rutas de negocios
export const MostrarNegocios = () => axios.get('/tareas/negocios')
export const MostrarNegocio = (id) => axios.get(`/tareas/negocios/${id}`)
export const AgregarNegocio = (negocio) => axios.post('/tareas/negocios/add', negocio)
export const ActualizarNegocio = (id, negocio) => axios.put(`/tareas/negocios/update/${id}`, negocio)
export const EliminarNegocio = (id) => axios.delete(`/tareas/negocios/delete/${id}`)

// rutas de eventos
export const MostrarEventos = () => axios.get('/tareas/eventos')
export const MostrarEvento = (id) => axios.get(`/tareas/eventos/${id}`)
export const AgregarEvento = (evento) => axios.post('/tareas/eventos/add', evento)
export const ActualizarEvento = (evento) => axios.put(`/tareas/eventos/update/${evento.id}`, evento)
export const EliminarEvento = (id) => axios.delete(`/tareas/eventos/delete/${id}`)

// rutas de lugares
export const MostrarLugares = () => axios.get('/tareas/negocios')
export const MostrarLugar = (id) => axios.get(`/tareas/negocios/${id}`)
export const AgregarLugar = (lugar) => axios.post('/tareas/negocios/add', lugar)
export const ActualizarLugar = (lugar) => axios.put(`/tareas/negocios/update/${lugar.id}`, lugar)
export const EliminarLugar = (id) => axios.delete(`/tareas/negocios/delete/${id}`)
