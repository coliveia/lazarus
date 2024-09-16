import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Container, Paper, Button } from '@mui/material';

const PatientList = () => {
  const { hospitalId } = useParams();
  const navigate = useNavigate();
  const patients = [
    { id: 1, name: 'Weber Morais', cpf: '123.456.789-00', dob: '01/01/1960', diagnosis: 'Gripe' },
    { id: 2, name: 'Richard Souza', cpf: '987.654.321-00', dob: '02/02/1980', diagnosis: 'Diarreia' },
    { id: 3, name: 'Deivid Rafael', cpf: '983.624.221-00', dob: '02/02/1985', diagnosis: 'Coma Alcoolico' },
    // Adicione mais pacientes aqui
  ];

  const handleGoBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <Container component={Paper} elevation={3} maxWidth="md" sx={{ padding: 4, marginTop: 5 }}>
      <Button variant="outlined" color="primary" onClick={handleGoBack} sx={{ mb: 2 }}>
        Voltar
      </Button>
      <Typography variant="h4" gutterBottom>
        Pacientes Internados - Hospital {hospitalId}
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        component={Link} 
        to="/add-patient" 
        sx={{ mb: 4 }}
      >
        Adicionar Novo Paciente
      </Button>
      <Grid container spacing={4}>
        {patients.map((patient) => (
          <Grid item xs={12} sm={6} md={4} key={patient.id}>
            <Card sx={{ backgroundColor: '#fce4ec' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {patient.name}
                </Typography>
                <Typography color="textSecondary">
                  Diagnóstico: {patient.diagnosis}
                </Typography>
                <Button 
                  component={Link} 
                  to={`/patients/${patient.id}`} 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 2 }}
                >
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PatientList;
