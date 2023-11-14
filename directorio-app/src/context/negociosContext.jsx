import { createContext, useContext, useState } from "react";
import { consultaNegocio, consultaNegocios } from "../api/negocios";

const negociosContext = createContext()

export const useNegocios = () => {
    const context =  useContext(negociosContext)

    if (!context) {
        throw new Error("useNegocios must be used within a negociosProvider")
    }

    return context
}
export function NegociosProvider({children}) {

    const [negocios, setNegocios] = useState([])
    const [negocio, setNegocio] = useState([])

    const mostrarNegocios = async () => {
        try {
            const respuesta = await consultaNegocios()
            setNegocios(respuesta.data)
        } catch (error) {
            console.error(error)
        }
    }

    const mostrarNegocio = async (id) => {
        const respuesta = await consultaNegocio(id)
        setNegocio(respuesta.data)
    }

    return (
        <negociosContext.Provider 
        value={{
            negocio,
            negocios,
            mostrarNegocios,
            mostrarNegocio,
            }}>
            {children}
        </negociosContext.Provider>
    )
}