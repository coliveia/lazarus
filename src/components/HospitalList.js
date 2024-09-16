import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Container, Paper, Button } from '@mui/material';

const HospitalList = () => {
  const hospitals = [
    { id: 1, name: 'Hospital Albert Einstein' },
    { id: 2, name: 'Hospital Santa Catarina' },
    { id: 3, name: 'Hospital Leforte' },
    // Adicione mais hospitais aqui
  ];

  return (
    <Container component={Paper} elevation={3} maxWidth="md" sx={{ padding: 4, marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>Hospitais</Typography>
    
      <Grid container spacing={4}>
        {hospitals.map((hospital) => (
          <Grid item xs={12} sm={6} md={4} key={hospital.id}>
            <Card sx={{ backgroundColor: '#e3f2fd' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {hospital.name}
                </Typography>
                <Button 
                  component={Link} 
                  to={`/hospitals/${hospital.id}/patients`} 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 2 }}
                >
                  Ver Pacientes
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HospitalList;
