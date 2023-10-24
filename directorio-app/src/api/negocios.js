import axios from "./axios.js"

// consultas http de negocios
export const consultaNegocios = () => axios.get(`/negocios/mostrar`)