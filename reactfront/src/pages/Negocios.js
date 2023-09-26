import mantenimiento from '../utils/mantenimiento.png'


export default function Negocios() {
    return (
        <div className="contenedor-titulo">
            <h1 id="titulo"><b>Negocios</b> está en Mantenimiento!</h1>
            <img id="img-mantenimiento" src={mantenimiento}></img>
        </div>
    )
}