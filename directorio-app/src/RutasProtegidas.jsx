import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
function RutasProtegidas() {

    const {loading, estaAutentificado} = useAuth()

    if(loading) return <h1>Cargando...</h1>

    if(!loading && !estaAutentificado) return <Navigate to="/login" replace/>

    return <Outlet/>
}

export default RutasProtegidas;