import { useEffect } from "react";
import { useLugares } from "../context/lugaresContext";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "../styles/lugaresDetails.css"

function lugaresDetails() {

    const {mostrarLugar, lugar} = useLugares()
    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            mostrarLugares(parametros.id)
        }
    }, [])

    return (
        <div className="container-details">
            <Link id="volver-btn" to="/lugares"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Link>
            <h1> {">>"} {lugar.nombre}{" <<"}</h1>
            <div className="lugar-details">
                <div className="lugar-details-left">
                    <h2> { ">> "}Detalles del Lugar:</h2>
                    <p id="titulo-lugar"><b>Descripción:</b> {lugar.descripcion}</p>
                    <p id="titulo-lugar"><b>Tipo de Lugar:</b> {lugar.tipo_lugar}</p>
                    <p id="titulo-lugar"><b>Horario de Operación:</b> {lugar.H_operacion}</p>
                    <p id="titulo-lugar"><b>Dirección:</b> {lugar.direccion}</p>
                    <h2> { ">> "}Contacto:</h2>
                    <p id="titulo-lugar"><b>Teléfono:</b> {lugar.telefono}</p>
                    <p id="titulo-lugar"><b>Correo Electrónico:</b> {lugar.correo}</p>
                </div>
                <div className="lugar-details-right"></div> 
            </div>
        </div>
    )
}

export default lugaresDetails;