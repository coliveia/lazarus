import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Box, Typography, TextField } from '@mui/material';
import { FaEnvelope, FaUser } from 'react-icons/fa'; // Adicionando o ícone de usuário
import SearchIcon from '@mui/icons-material/Search'; // Ícone de busca

const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 4, backgroundColor: '#0a0a0a' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logotipo HealthChain */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ color: '#fff', marginLeft: 1 }}>
            Lazarus
          </Typography>
        </Box>

        {/* Barra de Pesquisa */}
        <Box sx={{ flexGrow: 1, mx: 2, maxWidth: '300px' }}> {/* Limitar o comprimento */}
          <TextField
            variant="outlined"
            placeholder="Pesquisar..."
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton type="submit" sx={{ padding: 0 }}>
                  <SearchIcon sx={{ color: '#1976d2' }} />
                </IconButton>
              ),
            }}
            sx={{
              backgroundColor: '#fff',
              borderRadius: 1,
              height: '36px', // Altura ajustada para ser metade da altura do header
              '& .MuiOutlinedInput-root': {
                height: '100%', // Faz com que o campo de texto ocupe toda a altura
              },
            }}
          />
        </Box>

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
