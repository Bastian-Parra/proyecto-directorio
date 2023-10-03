import React, { Component } from 'react';

class Eventos extends Component {
  constructor() {
    super();
    this.state = {
      eventos: [],
    };
  }

  componentDidMount() {
    // Realiza una solicitud GET al servidor para obtener eventos
    fetch('/api/eventos')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ eventos: data });
      })
      .catch((error) => {
        console.error('Error al obtener eventos:', error);
      });
  }

  render() {
    return (
      <div>
        <h3>Eventos</h3>
        <ul>
          {this.state.eventos.map((evento) => (
            <li key={evento.id}>
              <h2>{evento.nombre_evento}</h2>
              <p>Dirección: {evento.direccion_evento}</p>
              <p>Fecha y hora: {evento.fecha_hora}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Eventos;