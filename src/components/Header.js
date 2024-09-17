import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import { FaHome, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
      <IconButton
          component={Link}
          to="/home"
          edge="start"
          color="inherit"
          aria-label="home"
          sx={{ marginRight: 2 }}
        >
          <FaHome size={24} style={{ color: '#fff' }} /> {/* Cor branca para o ícone */}
        </IconButton>

        <IconButton
          component={Link}
          to="/notifications"
          edge="start"
          color="inherit"
          aria-label="notifications"
          sx={{ marginRight: 2 }}
        >
          <FaEnvelope size={24} style={{ color: '#fff' }} />
        </IconButton>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/hospitals">
            Hospitais
          </Button>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
