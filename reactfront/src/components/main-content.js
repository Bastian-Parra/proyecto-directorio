import valparaiso from '../utils/valparaiso.jpg'


export default function MainContent() {
    return (
        <Imagen/>
    )
}


function Imagen() {
    return (
        <img id="img-valparaiso" src={valparaiso}></img>
    )
}