import React, { useEffect, useState } from "react";
import { useEventos } from "../context/eventosContext";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "../styles/eventosDetails.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Imagen1 from '../assets/imagenesdeprueba/1.png'
import Imagen2 from '../assets/imagenesdeprueba/3.png'

function EventoDetails() {

    const {mostrarEvento, evento} = useEventos()
    const parametros = useParams()
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const thumbnails = [Imagen1, Imagen2];

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
                    <p id="titulo-evento"><b>Tipo de Evento:</b> {evento.direccion_evento}</p>
                    <p id="titulo-evento"><b>Horario de Operación:</b> {evento.fecha_hora}</p>
                </div>
                <div className="evento-details-right">
                <Carousel showThumbs>
                    <div>
                        <img src={Imagen1} alt="Imagen 1" />
                    </div>
                    <div>
                        <img src={Imagen2} alt="Imagen 2" />
                    </div>
                    {/* Añade más imágenes si las tienes */}
                </Carousel>
                </div>
            </div> 
            </div>
    )
}

export default EventoDetails;