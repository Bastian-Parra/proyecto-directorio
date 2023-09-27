import valparaiso from '../utils/valparaiso.jpg'


export default function MainContent() {
    return (
        <PrincipalContent/>
    )
}


function PrincipalContent() {
    return (
        <div className="contenedor-header">
            <div className="contenido-izquierda">
                <h1 id="titulo">Directorio de Negocios</h1>
                <h3 id="subtitulo">A tu disposición</h3>
            </div>
            <img className="img-derecha" src={valparaiso}></img>
        </div>

    )
}