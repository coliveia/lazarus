import React from 'react';
import { Button, TextField, Container, Typography, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ScienceIcon from '@mui/icons-material/Science'; // Ícone de laboratório

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica para autenticação e redirecionamento
    navigate('/home');
  };

  return (
    <Container
      component={Paper}
      elevation={6}
      maxWidth="xs"
      sx={{ padding: 4, marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {/* Ajuste do tamanho do ícone e formatação do texto para simular um logo */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <ScienceIcon sx={{ fontSize: 60, color: 'primary.main', marginRight: 1 }} />
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            letterSpacing: 1.5,
            color: '#1976d2', // Azul primário padrão
          }}
        >
          Lazarus
        </Typography>
      </Box>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Faça login para continuar
      </Typography>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        sx={{ mt: 1, width: '100%' }}
      >
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          required
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          required
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
