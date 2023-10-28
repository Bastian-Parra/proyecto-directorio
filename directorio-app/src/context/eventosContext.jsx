import { createContext, useContext, useState } from "react";
import { consultaEventos } from "../api/eventos.js";

const eventosContext = createContext()

export const useEventos = () => {
    const context =  useContext(eventosContext)

    if (!context) {
        throw new Error("useEventos must be used within a eventosProvider")
    }

    return context
}
export function EventosProvider({children}) {

    const [eventos, setEventos] = useState([])

    const mostrarEventos = async () => { 
        try {
            const respuesta = await consultaEventos()
            setEventos(respuesta.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <eventosContext.Provider 
        value={{
            eventos,
            mostrarEventos,
            }}>
            {children}
        </eventosContext.Provider>
    )
}