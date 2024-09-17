import React from 'react';
import { Container, Paper, Typography, Grid, TextField, Button, Box } from '@mui/material';

const UserPreferences = () => {
  return (
    <Container component={Paper} elevation={3} maxWidth="md" sx={{ padding: 4, marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>Preferências de Usuário</Typography>
      
      <Grid container spacing={4}>
        {/* Exemplo de campo de preferências - Nome */}
        <Grid item xs={12}>
          <TextField 
            fullWidth
            label="Nome"
            variant="outlined"
            defaultValue="Usuário Exemplo"
          />
        </Grid>

        {/* Exemplo de campo de preferências - E-mail */}
        <Grid item xs={12}>
          <TextField 
            fullWidth
            label="E-mail"
            variant="outlined"
            defaultValue="usuario@example.com"
          />
        </Grid>

        {/* Botão para salvar alterações */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary">
              Salvar Preferências
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserPreferences;
