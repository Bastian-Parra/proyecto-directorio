import axios from "../api/axios.js"

export const consultaRegistro = usuario => axios.post(`/register`, usuario)
export const consultaLogin = usuario => axios.post(`/login`, usuario)
export const verificarToken = () => axios.get(`/token`)