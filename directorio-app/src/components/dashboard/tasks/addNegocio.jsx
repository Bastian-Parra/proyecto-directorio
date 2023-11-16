import { AgregarNegocio } from "../../../api/dashboard"
import {useForm} from "react-hook-form"

function TaskNegocio() {

    const {register, handleSubmit} = useForm()

    const onSubmit = async (data) => {
        try {
            const formData = new FormData()
            formData.append("")
        } catch (error) {
            
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="text"
                    placeholder="Tipo de Negocio"
                    {...register("tipo_negocio")}
                    autoFocus
                />
                
                <input 
                    type="text"
                    placeholder="Horario de Operacion"
                    {...register("H_operacion")}
                />

                <textarea
                    rows="3"
                    placeholder="Descripción del Negocio"
                    {...register("descripcion")}
                />

                <input 
                    type="text"
                    placeholder="Nombre del Negocio"
                    {...register("nombre")}
                />
                
                <input 
                    type="text" 
                    placeholder="Direccion"
                    {...register("direccion")}
                />

                <input 
                    type="text"
                    placeholder="Numero telefonico"
                    {...register("telefono")} 
                />

                <input 
                    type="email"
                    placeholder="Correo de contacto"  
                    {...register("correo")}
                />

                <input 
                    type="number"
                    placeholder="Id de la ubicacion"
                />
            </form>
        </div>
    )
}

export default TaskNegocio;