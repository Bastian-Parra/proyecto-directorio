import { useEffect } from "react";
import { useEventos } from "../context/eventosContext";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "../styles/eventosDetails.css"
function EventoDetails() {

    const {mostrarEvento, evento} = useEventos()
    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            mostrarEvento(parametros.id)
        }
    }, [])

    return (
        <div className="container-details">
            <Link id="volver-btn" to="/eventos"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Link>
            <h1> {">>"} {evento.nombre_evento}{" <<"}</h1>
            <div className="evento-details">
                <div className="evento-details-left">
                    <h2> { ">> "}Detalles del Evento:</h2>
                    <p id="titulo-evento"><b>Descripción:</b> {evento.descripcion_evento}</p>
                    <p id="titulo-evento"><b>Tipo de Negocio:</b> {evento.direccion_evento}</p>
                    <p id="titulo-evento"><b>Horario de Operación:</b> {evento.fecha_hora}</p>
                </div>
                <div className="evento-details-right"></div> 
            </div>
        </div>
    )
}

export default EventoDetails;