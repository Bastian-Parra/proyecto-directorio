import { createContext, useContext, useState } from "react";
import { consultaLugares } from "../api/lugares"; 
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

    const mostrarLugares = async () => {
        try {
            const respuesta = await consultaLugares(); 
            setLugares(respuesta.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <lugaresContext.Provider
            value={{
                lugares,
                mostrarLugares,
            }}>
            {children}
        </lugaresContext.Provider>
    )
}
