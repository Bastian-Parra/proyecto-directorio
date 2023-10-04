import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShop, faCalendarDays, faMapLocationDot, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import '../styles/navegador.css'

export default function Navigator() {
    return (
        <div>
            <Nav/>
        </div>
    );
}

function Nav() {
    return (
        
        <nav className="containerNavigator">
            <div id="navigation-container">
                <div className="logo">
                    <a href="/"><img id="logo" src={logo}></img></a>
                </div>
                <ul>
                    <li><a id="button-rest" href="/"><FontAwesomeIcon icon={faHome} id="iconos-nav"/>Inicio</a></li>
                    <li><a id="button-rest" href="/negocios"><FontAwesomeIcon icon={faShop} id="iconos-nav"/>Negocios</a></li>
                    <li><a id="button-rest" href="/eventos"><FontAwesomeIcon icon={faCalendarDays} id="iconos-nav"/>Eventos</a></li>
                    <li><a id="button-rest" href="/lugares"><FontAwesomeIcon icon={faMapLocationDot} id="iconos-nav"/>Lugares de Interes</a></li>
                    <li><a id="button-inicio" href="/login"><FontAwesomeIcon icon={faArrowRightToBracket} id="iconos-nav"/>Inicio de Sesión</a></li>
                </ul>
            </div>
        </nav>
    );
}