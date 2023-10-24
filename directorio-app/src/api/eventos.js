import axios from "./axios.js"

// consultas http de eventos
export const consultaEventos = () => axios.get(`/eventos/mostrar`)