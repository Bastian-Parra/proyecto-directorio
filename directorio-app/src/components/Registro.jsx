import { render } from 'ejs';

import React, { Component } from 'react';
import '../styles/register.css';

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre_usuario: '',
      contraseña: '',
      correo_usuario: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { nombre_usuario, contraseña, correo_usuario } = this.state;
    const puertoServidorExpress = 5000;

    fetch(`http://localhost:${puertoServidorExpress}/registro`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `nombre_usuario=${nombre_usuario}&contraseña=${contraseña}&correo_usuario=${correo_usuario}`,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Registro exitoso. Ahora puedes iniciar sesión.');
        } else {
          alert('Error en el registro. Comprueba tus credenciales o inténtalo nuevamente.');
        } 
      })
      .catch((error) => {
        console.error('Error al registrar usuario:', error);
      });
  };

  render() {
    return (
      <div className="container-register">
        <div className="container-form-title">
          <div className="title-container">
            Formulario de Registro
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">Nombre de Usuario</label>
              <input
                required
                placeholder="Ingresa tu nombre de usuario"
                type="text"
                id="username"
                value={this.state.nombre_usuario}
                onChange={(e) => this.setState({ nombre_usuario: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email">Correo Electrónico</label>
              <input
                required
                placeholder="Ingresa tu correo electrónico"
                type="email"
                id="email"
                value={this.state.correo_usuario}
                onChange={(e) => this.setState({ correo_usuario: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input
                required
                placeholder="Ingresa tu contraseña"
                type="password"
                id="password"
                value={this.state.contraseña}
                onChange={(e) => this.setState({ contraseña: e.target.value })}
              />
            </div>
            <button type="submit">Registrarse</button>
          </form>
        </div>
        <div className="container-register-right">
          <div className="container-img-register"></div>
          <div className="container-text">
            <p>
            ¡Únete a nuestra comunidad de exploradores! 
            El registro es tu puerta de entrada para descubrir
            una amplia gama de negocios, eventos y lugares de 
            interés en nuestra área. Al convertirte en miembro, 
            tendrás acceso a información detallada sobre los mejores
              lugares para visitar, eventos emocionantes que están 
              sucediendo y las últimas ofertas de negocios locales.
              Tu cuenta es tu boleto para explorar y disfrutar al 
              máximo de lo que nuestra comunidad tiene para ofrecer.
                <br></br>
                <br></br>
              <b>Regístrate ahora y comienza a explorar en grande!</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;
