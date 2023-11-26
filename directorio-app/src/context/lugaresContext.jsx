import { createContext, useContext, useState } from "react";
import { consultaLugares, consultalugar} from "../api/lugares"; 
import { EliminarLugar, ActualizarLugar } from "../api/dashboard";
const lugaresContext = createContext();

export const useLugares = () => {
    const context = useContext(lugaresContext);

    if (!context) {
        throw new Error("useLugares must be used within a lugaresProvider");
    }

    return context;
}

export function LugaresProvider({ children }) {

    const [lugares, setLugares] = useState([]);
    const [lugar, setLugar] = useState([])

    const mostrarLugares = async () => {
        try {
            const respuesta = await consultaLugares(); 
            setLugares(respuesta.data);
        } catch (error) {
            console.error(error);
        }
    }

    const mostrarLugar = async (id) => {
        try {
            const respuesta = await consultalugar(id)
            setLugar(respuesta.data);
        } catch (error) {
            console.error(error)
        }
    }

    const eliminarLugar = async (id) => {
        try {
            const respuesta = await EliminarLugar(id)
            if (respuesta.status === 200) setLugares(lugares.filter(lugar => lugar.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const actualizarLugar = async (id, params) => {
        try {
            await ActualizarLugar(id, params)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <lugaresContext.Provider
            value={{
                mostrarLugar,
                eliminarLugar,
                mostrarLugares,
                actualizarLugar,
                lugares,
                lugar,
            }}>
            {children}
        </lugaresContext.Provider>
    )
}
