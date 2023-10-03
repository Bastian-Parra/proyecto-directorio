import '../styles/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Login() {
    return (
        <LogIn/>
    )
}

function LogIn() {
    return (
        <div className="principal-container">
            <div className="left-container">
                <div className="container-img"></div>
                <div className="container-text">
                <p>
                    Excepteur duis nulla do mollit voluptate veniam est 
                    consequat aliquip eu est consequat mollit. 
                    Qui adipisicing consequat enim duis pariatur occaecat.
                     Aliquip elit id ipsum est ut id commodo dolore eiusmod 
                     eu occaecat labore ut aliqua. Cupidatat ut sint ea 
                     aute nostrud eu ipsum commodo elit amet ipsum consequat. 
                     Enim tempor esse esse laboris deserunt duis magna sint duis quis
                      exercitation. Dolor laboris Lorem do sunt excepteur dolore.
                </p>
                </div>
            </div>
            <div className="right-container">
                <div className="title-container">Ingresa a tu cuenta</div>
                <div className="form-container">
                    <label for="name">Nombre de usuario</label>
                    <input type="text" placeholder="Ingresa nombre de usuario" name="name" required></input>
                    <label for="password">Contraseña</label>
                    <input type="password" placeholder="Ingresa contraseña" name="password" required></input>
                    <button type="submit">Ingresar</button>
                    <label id="checkboxlabel" for="remember">
                        <input id="checkbox"type="checkbox" name="remember"></input>
                        Recordar cuenta
                    </label>
                    <div id="container-redirect">
                    ¿No tienes cuenta? 
                    <a id="enviar-registro">Registrate</a>
                    </div>
                </div>
            </div>
        </div>
    )
}