import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Container, Paper, Button } from '@mui/material';

const Home = () => {
  const cards = [
    { id: 1, title: 'Hospitais', link: '/hospitals', description: 'Gerencie e veja informações dos hospitais.' },
    { id: 2, title: 'Dashboard', link: '/dashboard', description: 'Acesse o painel de controle com estatísticas.' }
  ];

  return (
    <Container component={Paper} elevation={3} maxWidth="md" sx={{ padding: 4, marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>Página Inicial</Typography>
    
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card sx={{ backgroundColor: '#e3f2fd' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                  {card.description}
                </Typography>
                <Button 
                  component={Link} 
                  to={card.link} 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 2 }}
                >
                  Acessar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;