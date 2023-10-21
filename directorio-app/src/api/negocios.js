import axios from "./axios.js"

export const consultaNegocios = () => axios.get(`/negocios/mostrar`)