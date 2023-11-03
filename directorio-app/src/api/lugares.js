import axios from "./axios.js"

export const consultaLugares = () => axios.get(`/lugares/mostrar`)
export const consultaLugar = (id) => axios.get(`/lugares/mostrar/${id}`)