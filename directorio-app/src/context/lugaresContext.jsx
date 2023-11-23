import { createContext, useContext, useState } from "react";
import { consultaLugares, consultalugar} from "../api/lugares"; 
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

    return (
        <lugaresContext.Provider
            value={{
                lugar,
                mostrarLugar,
                lugares,
                mostrarLugares,
            }}>
            {children}
        </lugaresContext.Provider>
    )
}
