import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import { FaHome, FaEnvelope, FaUser } from 'react-icons/fa'; // Adicionando o ícone de usuário

const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Ícone de Home na esquerda */}
        <IconButton
          component={Link}
          to="/home"
          edge="start"
          color="inherit"
          aria-label="home"
          sx={{ marginRight: 2 }}
        >
          <FaHome size={24} style={{ color: '#fff' }} />
        </IconButton>

        {/* Ícones de Notificação e Usuário na direita */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            component={Link}
            to="/notifications"
            edge="end"
            color="inherit"
            aria-label="notifications"
            sx={{ marginRight: 2 }}
          >
            <FaEnvelope size={24} style={{ color: '#fff' }} />
          </IconButton>

          {/* Ícone de Usuário */}
          <IconButton
            component={Link}
            to="/preferences" // Exemplo de rota para perfil do usuário
            edge="end"
            color="inherit"
            aria-label="user"
          >
            <FaUser size={24} style={{ color: '#fff' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
