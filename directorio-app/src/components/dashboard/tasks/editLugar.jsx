import { AgregarLugar } from "../../../api/dashboard.js"
import {useForm} from "react-hook-form"
import { Link, useNavigate, useParams} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import { useLugares } from "../../../context/lugaresContext.jsx"

// task: agregar un negocio en el dashboard
function EditLugar() {
    

    const {register, handleSubmit, formState: {errors}, setValue} = useForm()     // se utiliza useForm para crear un formulario
    const [errores, setErrores] = useState([]) // se utiliza useState para manejar los errores
    const reenviar = useNavigate() // navigate para redireccionar
    const {mostrarLugar, actualizarLugar} = useLugares()
    
    const parametros = useParams()

    useEffect(() => {
        async function cargarLugar() {
            if(parametros.id){
                const lugar = await mostrarLugar(parametros.id)
                
                setValue("nombre_lugar", lugar.nombre_lugar)
                setValue("direccion_lugar", lugar.direccion_lugar)      
                setValue("descripcion_lugar", lugar.descripcion_lugar)      
            }
        }
        cargarLugar() // se llama a la funcion
    })


    const onSubmit = async (data) => {
        if(parametros.id) {
            actualizarLugar(parametros.id, data)
            alert("Lugar Actualizado con exito")
            reenviar('/dashboard/lugares')
        }
        
    }

    return (

        // se crea el formulario y con register de useForm() se guardan los datos
        <div className="container-form">
            <Link id="volver-btn1" to="/dashboard/lugares"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>  Regresar</Link>

            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">               
                <input 
                    type="text"
                    placeholder="Nombre del Lugar"
                    {...register("nombre_lugar", {required: true})}
                    id="nombre_lugar"
                    autoFocus
                />

                    {       
                    errors.nombre_lugar &&
                        <p className="error"><FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon> El nombre del lugar es requerido.</p>
                    }
                
                <input 
                    type="text"
                    placeholder="Direccion del lugar"
                    id="direccion_lugar"
                    {...register("direccion_lugar", {required: true})}
                />
                    {       
                    errors.direccion_lugar &&
                        <p className="error"><FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon> La direccion del lugar es requerida.</p>
                    }
                
                <input 
                    type="text"
                    placeholder="Direccion del lugar"
                    id="descripcion_lugar"
                    {...register("descripcion_lugar", {required: true})}
                />



                
                <button type="submit">Guardar cambios</button>
            </form>
        </div>
    )
}

export default EditLugar;