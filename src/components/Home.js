import React from 'react';
import { Grid, Card, CardContent, Typography, Container, Paper, Button, IconButton } from '@mui/material';
import { FaSearch } from 'react-icons/fa'; // Ícone de lupa para pesquisa

const Home = () => {
  return (
    <Container component={Paper} elevation={3} maxWidth="lg" sx={{ padding: 4, marginTop: 5 }}>
      <Typography variant="h5" gutterBottom>Painel Analítico</Typography>

      {/* Seção de Contas Médicas */}
      <Grid container spacing={2} sx={{ marginBottom: 4 }}>
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: '#f8f9fa', padding: 2 }}>
            <Typography variant="h6" gutterBottom>Contas Médicas</Typography>

            {/* Card para cada conta médica */}
            <Card sx={{ backgroundColor: '#fff', marginBottom: 2 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="body2"><strong>ID:</strong> 235841238</Typography>
                    <Typography variant="body2"><strong>CID:</strong> A91</Typography>
                    <Typography variant="body2"><strong>Hospital:</strong> São Luiz</Typography>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography variant="body2"><strong>Tempo:</strong> 3 Dias</Typography>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography variant="body2"><strong>Valor Cobrado:</strong> R$ 2.585,23</Typography>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography variant="body2" color="error"><strong>Status:</strong> Rejeitado</Typography>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <IconButton>
                      <FaSearch />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Outro exemplo de conta */}
            <Card sx={{ backgroundColor: '#fff', marginBottom: 2 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="body2"><strong>ID:</strong> 235841239</Typography>
                    <Typography variant="body2"><strong>CID:</strong> B12</Typography>
                    <Typography variant="body2"><strong>Hospital:</strong> Brasil</Typography>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography variant="body2"><strong>Tempo:</strong> 5 Dias</Typography>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography variant="body2"><strong>Valor Cobrado:</strong> R$ 1.000,00</Typography>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography variant="body2" color="primary"><strong>Status:</strong> Aprovado</Typography>
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <IconButton>
                      <FaSearch />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Card>
        </Grid>
      </Grid>

      {/* Seção Operadoras de Saúde */}
      <Grid container spacing={2} sx={{ marginBottom: 4 }}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>Operadoras De Saúde</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#e9f7f6', padding: 2 }}>
                <CardContent>
                  <Typography variant="h6">Bradesco Saúde</Typography>
                  <Typography variant="body2">85 Prorrogações</Typography>
                  <Button variant="outlined" color="primary" sx={{ marginTop: 2 }}>Ver Agora</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#e9f7f6', padding: 2 }}>
                <CardContent>
                  <Typography variant="h6">Amil</Typography>
                  <Typography variant="body2">12 Prorrogações</Typography>
                  <Button variant="outlined" color="primary" sx={{ marginTop: 2 }}>Ver Agora</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Seção Próximos Prazos */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>Próximos Prazos</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#fffde7', padding: 2 }}>
                <CardContent>
                  <Typography variant="h6">Amil</Typography>
                  <Typography variant="body2">CID A91</Typography>
                  <Typography variant="body2">09:00 - 11:00</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#fffde7', padding: 2 }}>
                <CardContent>
                  <Typography variant="h6">Unimed</Typography>
                  <Typography variant="body2">CID B12</Typography>
                  <Typography variant="body2">10:00 - 12:00</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#fffde7', padding: 2 }}>
                <CardContent>
                  <Typography variant="h6">Allianz</Typography>
                  <Typography variant="body2">CID C34</Typography>
                  <Typography variant="body2">14:00 - 16:00</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
