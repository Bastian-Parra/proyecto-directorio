import { useEffect, useState } from "react";
import { useLugares } from "../context/lugaresContext";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "../styles/lugaresDetails.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function LugaresDetails() {

    const {mostrarLugar, lugares} = useLugares()
    const parametros = useParams()
    const [comentario, setComentario] = useState("");
    const [evaluacion, setEvaluacion] = useState("");
    console.log(lugares)

    const handleResenaSubmit = (e) => {
        e.preventDefault();
        console.log('Comentario:', comentario, 'Evaluación:', evaluacion);
    };
    useEffect(() => {
        if (parametros.id) {
            mostrarLugar(parametros.id)
        }
    }, [])

    return (
        <div>
        <div className="container-details">
            <Link id="volver-btn" to="/lugares"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Link>
            <h1> {">>"} {lugares.nombre_lugar}{" <<"}</h1>
            <div className="lugar-details">
                <div className="lugar-details-left">
                    <h2> { ">> "}Detalles del Lugar:</h2>
                    {lugares.id}
                    <p id="titulo-lugar"><b>Nombre del Lugar:</b> {lugares.nombre_lugar}</p>
                    <p id="titulo-lugar"><b>Dirección:</b> {lugares.direccion_lugar}</p>
                    <p id="titulo-lugar"><b>Descripcion del lugar:</b> {lugares.descripcion_lugar}</p>
                </div>
                <div className="lugar-details-right">
                <Carousel showThumbs>
                {lugares.map((lugar) => (
                    <div key={lugar.id}>
                        <img src={Link} alt={`Imagen del lugar ${lugares.imagen}`} />
                    </div>
                ))}
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="container-resena">
                <h2>Escribe tu reseña</h2>
                <form onSubmit = {handleResenaSubmit}>
                    <textarea
                        value = {comentario}
                        onChange = {(e) => setComentario(e.target.value)}
                        placeholder = "Escribe tu comentario acá"
                    />
                    <br />
                    <div>
                        {[...Array(5)].map((star, index) => (
                            <span key = {index} onClick = {() => setEvaluacion(index + 1)}>
                                {index < evaluacion ? "★" : "☆"}
                            </span>
                        ))}
                    </div>
                    <button type = "submit">Enviar</button>
                </form>
            </div>
        </div>
                       

    )
}

export default LugaresDetails;