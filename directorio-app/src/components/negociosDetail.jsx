import { useEffect } from "react";
import { useNegocios } from "../context/negociosContext";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "../styles/negociosDetails.css"
function NegocioDetails() {

    const {mostrarNegocio, negocio} = useNegocios()
    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            mostrarNegocio(parametros.id)
        }
    }, [])

    return (
        <div className="container-details">
            <Link id="volver-btn" to="/negocios"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Link>
            <h1> {">>"} {negocio.nombre}{" <<"}</h1>
            <div className="negocio-details">
                <div className="negocio-details-left">
                    <h2> { ">> "}Detalles del Negocio:</h2>
                    <p id="titulo-negocio"><b>Descripción:</b> {negocio.descripcion}</p>
                    <p id="titulo-negocio"><b>Tipo de Negocio:</b> {negocio.tipo_negocio}</p>
                    <p id="titulo-negocio"><b>Horario de Operación:</b> {negocio.H_operacion}</p>
                    <p id="titulo-negocio"><b>Dirección:</b> {negocio.direccion}</p>
                    <h2> { ">> "}Contacto:</h2>
                    <p id="titulo-negocio"><b>Teléfono:</b> {negocio.telefono}</p>
                    <p id="titulo-negocio"><b>Correo Electrónico:</b> {negocio.correo}</p>
                </div>
                <div className="negocio-details-right"></div> 
            </div>
        </div>
    )
}

export default NegocioDetails;