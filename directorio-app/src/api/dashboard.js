import axios from '../api/axios.js'

// rutas de negocios
export const MostrarNegocios = () => axios.get('/tareas/negocios')
export const MostrarNegocio = (id) => axios.get(`/tareas/negocios/${id}`)
export const AgregarNegocio = (negocio) => axios.post('/tareas/negocios/add', negocio)
export const ActualizarNegocio = (id, negocio) => axios.put(`/tareas/negocios/update/${id}`, negocio)
export const EliminarNegocio = (id) => axios.delete(`/tareas/negocios/delete/${id}`)

// rutas de eventos
export const mostrarEventos = () => axios.get('/tareas/eventos')
export const mostrarEvento = (id) => axios.get(`/tareas/eventos/${id}`)
export const AgregarEvento = (evento) => axios.post('/tareas/eventos/add', evento)
export const ActualizarEvento = (id, evento) => axios.put(`/tareas/eventos/update/${id}`, evento)
export const EliminarEvento = (id) => axios.delete(`/tareas/eventos/delete/${id}`)

// rutas de lugares
export const MostrarLugares = () => axios.get('/tareas/lugares')
export const MostrarLugar = (id) => axios.get(`/tareas/lugares/${id}`)
export const AgregarLugar = (lugar) => axios.post('/tareas/lugares/add', lugar)
export const ActualizarLugar = (id, lugar) => axios.put(`/tareas/lugares/update/${id}`, lugar)
export const EliminarLugar = (id) => axios.delete(`/tareas/lugares/delete/${id}`)
