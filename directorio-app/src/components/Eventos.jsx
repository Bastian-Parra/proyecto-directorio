import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEventos } from '../context/eventosContext';

const Eventos = () => {
  const { mostrarEventos, eventos } = useEventos();

  useEffect(() => {
    mostrarEventos();
  }, []);

  if (eventos.length === 0) {
    return (
      <h1>No hay Eventos</h1>
    );
  }

  // Resto de tu código para mostrar los eventos
}