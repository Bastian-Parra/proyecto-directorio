import React, { Component } from 'react'

class Negocios extends Component {
  componentDidMount() {

    const puertoServidorExpress = 5000

    fetch(`http://localhost:${puertoServidorExpress}/api/negocios`)
      .then(response => {
        if (!response.ok) {
          throw new Error('La respuesta de la solicitud no fue exitosa');
        }
        return response.json();
      })
      .then(data => {
        // Los datos se encuentran en 'data'
        console.log(data);
      })
      .catch(error => {
        console.error('Error al obtener negocios:', error);
      });
  }

  render() {
    return(
      <>Hola</>
    )
  }
}

export default Negocios