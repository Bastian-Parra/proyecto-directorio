import { useEffect } from "react";
import { useLugares } from "../context/lugaresContext";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "../styles/lugaresDetails.css"

function lugaresDetails() {

    const {mostrarLugares, lugar} = useLugares()
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
                    <p id="titulo-lugar"><b>Nombre del Lugar:</b> {lugar.nombre_lugar}</p>
                    <p id="titulo-lugar"><b>Reseña del Lugar:</b> {lugar.id_reseña}</p>
                    <p id="titulo-lugar"><b>Ubicacion del lugar:</b> {lugar.id_ubicacion}</p>
                    <p id="titulo-lugar"><b>Dirección:</b> {lugar.direccion_lugar}</p>
                </div>
                <div className="lugar-details-right"></div> 
            </div>
        </div>
    )
}

export default lugaresDetails;