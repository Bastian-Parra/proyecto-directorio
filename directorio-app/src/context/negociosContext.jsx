import { createContext, useContext, useState } from "react";
import { consultaNegocios } from "../api/negocios";

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

    const mostrarNegocios = async () => {
        try {
            const respuesta = await consultaNegocios()
            setNegocios(respuesta.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <negociosContext.Provider 
        value={{
            negocios,
            mostrarNegocios,
            }}>
            {children}
        </negociosContext.Provider>
    )
}