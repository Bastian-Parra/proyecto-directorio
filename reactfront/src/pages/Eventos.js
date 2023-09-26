import mantenimiento from '../utils/mantenimiento.png'


export default function Eventos() {
    return (
        <div className="contenedor-titulo">
            <h1 id="titulo"><b>Eventos</b> está en Mantenimiento!</h1>
            <img id="img-mantenimiento" src={mantenimiento}></img>
        </div>
    )
}