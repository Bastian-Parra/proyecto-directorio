import logo from '../assets/logo.png'

export default function Navigator() {
    return (
        <div>
            <Nav/>
        </div>
    );
}

function Nav() {
    return (
        
        <nav class="containerNavigator">
            <div id="navigation-container">
                <div class="logo">
                    <a href="#"><img id="logo" src={logo}></img></a>
                </div>
                <ul>
                    <li><a id="button-rest" href="/">Inicio</a></li>
                    <li><a id="button-rest" href="/negocios">Negocios</a></li>
                    <li><a id="button-rest" href="/eventos">Eventos</a></li>
                    <li><a id="button-rest" href="/lugares">Lugares de Interes</a></li>
                    <li><a id="button-inicio" href="#">Inicio de Sesión</a></li>
                </ul>
            </div>
        </nav>
    );
}