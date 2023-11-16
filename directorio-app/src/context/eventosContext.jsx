import { createContext, useContext, useState } from "react";
import { consultaEventos, consultaEvento } from "../api/eventos.js";

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
    const [evento, setEvento] = useState({})

    const mostrarEventos = async () => { 
        try {
            const respuesta = await consultaEventos()
            setEventos(respuesta.data)
        } catch (error) {
            console.error(error)
        }
    }
    const mostrarEvento = async (id) => {
        const respuesta = await consultaEvento(id)
        setEvento(respuesta.data)
    }

    return (
        <eventosContext.Provider 
        value={{
            eventos,
            evento,
            mostrarEventos,
            mostrarEvento,
            }}>
            {children}
        </eventosContext.Provider>
    )
}