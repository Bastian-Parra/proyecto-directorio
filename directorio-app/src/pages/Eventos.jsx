import React, { Component } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

class Eventos extends Component {
  constructor() {
    super();
    this.state = {
      eventos: [],
    };
  }

  componentDidMount() {
    
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
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          justifyContent={"center"}
          alignItems="center"
          p={4}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            Eventos App
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            Explora los eventos en tiempo real
          </Typography>
          <Link to="/otrapagina"> {/* Cambia la URL a la que deseas redirigir al hacer clic */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
              }}
            >
              Comenzar!
            </Button>
          </Link>
        </Box>
        <Box
          padding={10}
          display="flex"
          flexDirection="column"
          gap={5}
          alignItems="center"
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            Listado de Eventos
          </Typography>
          <ul>
            {this.state.eventos.map((evento) => (
              <li key={evento.id}>
                <h2>{evento.nombre_evento}</h2>
                <p>Dirección: {evento.direccion_evento}</p>
                <p>Fecha y hora: {evento.fecha_hora}</p>
              </li>
            ))}
          </ul>
        </Box>
      </div>
    );
  }
}

export default Eventos