import React from 'react';
import { Button, TextField, Container, Typography, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
      <Typography variant="h4" gutterBottom>
        Lazarus
      </Typography>
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
