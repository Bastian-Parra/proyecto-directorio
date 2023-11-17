import { AgregarNegocio } from "../../../api/dashboard.js"
import {useForm} from "react-hook-form"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
function TaskNegocio() {

    const {register, handleSubmit} = useForm()

    const onSubmit = async (data) => {
        try {
            const formData = new FormData()

            formData.append("tipo_negocio", data.tipo_negocio)
            formData.append("H_operacion", data.H_operacion)
            formData.append("descripcion", data.descripcion)
            formData.append("nombre", data.nombre)
            formData.append("direccion", data.direccion)
            formData.append("telefono", data.telefono)
            formData.append("correo", data.correo)
            formData.append("imagen", data.imagen[0])

            const respuesta = await AgregarNegocio(formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })

            console.log(respuesta.data)
        } catch (error) {
            console.log("Error al crear un negocio", error)
        }
    }

    return (
        <div className="container-form">
            <Link id="volver-btn1" to="/negocios"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>  Regresar</Link>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <input 
                    type="text"
                    placeholder="Tipo de Negocio"
                    {...register("tipo_negocio")}
                    id="tipo_negocio"
                    autoFocus
                />
                
                <input 
                    type="text"
                    placeholder="Horario de Operacion"
                    id="H_operacion"
                    {...register("H_operacion")}
                />

                <textarea
                    rows="3"
                    id="descripcion"
                    placeholder="Descripción del Negocio"
                    {...register("descripcion")}
                />

                <input 
                    type="text"
                    id="nombre"
                    placeholder="Nombre del Negocio"
                    {...register("nombre")}
                />
                
                <input 
                    type="text"
                    id="direccion"
                    placeholder="Direccion"
                    {...register("direccion")}
                />

                <input 
                    type="text"
                    id="telefono"
                    placeholder="Numero telefonico"
                    {...register("telefono")} 
                />

                <input 
                    type="email"
                    id="correo"
                    placeholder="Correo de contacto"  
                    {...register("correo")}
                />

                <input 
                    type="file"
                    name="imagen"
                    id="imagen"
                    {...register("imagen")}
                />

                <button type="submit">Crear</button>
            </form>
        </div>
    )
}

export default TaskNegocio;