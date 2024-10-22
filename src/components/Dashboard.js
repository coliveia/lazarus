import React from 'react';
import { Container, Grid, Paper, Typography, Card, TextField, Button, IconButton, InputAdornment, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Registrando os componentes do ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Dados para os gráficos
  const dataBar = {
    labels: ['Hospital A', 'Hospital B', 'Hospital C'],
    datasets: [
      {
        label: 'Número de Pacientes',
        data: [15, 40, 20],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const dataLine = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Tickets Fechados vs Abertos',
        data: [200, 300, 250, 280, 220, 290, 320, 330, 310, 400],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(153, 102, 255, 1)',
        pointBorderColor: '#fff',
      },
    ],
  };

  const dataCID = {
    labels: ['CID 10', 'CID 11', 'CID 12'],
    datasets: [
      {
        label: 'Quantidade de CIDs',
        data: [50, 70, 30],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const dataAI = {
    labels: ['Interações'],
    datasets: [
      {
        label: 'Análises Interativas',
        data: [120],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container component={Paper} elevation={3} maxWidth="xl" sx={{ padding: 2, marginTop: 3, backgroundColor: '#1b1e34', color: '#fff' }}>
      {/* Header com busca e ícones */}
      <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
        <Typography variant="h5" gutterBottom>
          Dashboard de Relatórios
        </Typography>
        <Grid item>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Digite para saber mais sobre um prontuário"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: { color: '#fff', backgroundColor: '#333', height: 40 }
            }}
          />
          <IconButton sx={{ color: '#fff', marginLeft: 2 }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <AccountCircleIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {/* Filtros na lateral esquerda */}
        <Grid item xs={12} md={3}>
          <Card sx={{ backgroundColor: '#2c2f48', padding: 2 }}>
            <Typography variant="h6" sx={{ fontSize: 14 }} gutterBottom>
              Filtros
            </Typography>
            {/* Filtros de exemplo */}
            <FormControl fullWidth sx={{ marginBottom: 1 }}>
              <InputLabel id="year-label" sx={{ color: '#fff' }}>Ano</InputLabel>
              <Select labelId="year-label" label="Ano" size="small" defaultValue="" sx={{ color: '#fff', '.MuiOutlinedInput-notchedOutline': { borderColor: '#fff' } }}>
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: 1 }}>
              <InputLabel id="severity-label" sx={{ color: '#fff' }}>Severidade</InputLabel>
              <Select labelId="severity-label" label="Severidade" size="small" defaultValue="" sx={{ color: '#fff', '.MuiOutlinedInput-notchedOutline': { borderColor: '#fff' } }}>
                <MenuItem value="alta">Alta</MenuItem>
                <MenuItem value="media">Média</MenuItem>
                <MenuItem value="baixa">Baixa</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: 1 }}>
              <InputLabel id="category-label" sx={{ color: '#fff' }}>Categoria</InputLabel>
              <Select labelId="category-label" label="Categoria" size="small" defaultValue="" sx={{ color: '#fff', '.MuiOutlinedInput-notchedOutline': { borderColor: '#fff' } }}>
                <MenuItem value="sistema">Sistema</MenuItem>
                <MenuItem value="acesso">Acesso</MenuItem>
                <MenuItem value="software">Software</MenuItem>
              </Select>
            </FormControl>

            <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 1 }}>
              Resetar Filtros
            </Button>
          </Card>
        </Grid>

        {/* Gráficos e Cards principais */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {/* Gráfico de Pacientes por Hospital */}
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#2c2f48', padding: 1, height: '100%' }}>
                <Typography variant="h6" sx={{ fontSize: 14 }} gutterBottom>
                  Pacientes por Hospital
                </Typography>
                <Bar
                  data={dataBar}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                    },
                    scales: {
                      x: { ticks: { color: '#fff', fontSize: 10 } },
                      y: { ticks: { color: '#fff', fontSize: 10 } },
                    },
                  }}
                />
              </Card>
            </Grid>

            {/* Gráfico de Tickets Fechados */}
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#2c2f48', padding: 1, height: '100%' }}>
                <Typography variant="h6" sx={{ fontSize: 14 }} gutterBottom>
                  Tickets Fechados vs Abertos
                </Typography>
                <Line
                  data={dataLine}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                    },
                    scales: {
                      x: { ticks: { color: '#fff', fontSize: 10 } },
                      y: { ticks: { color: '#fff', fontSize: 10 } },
                    },
                  }}
                />
              </Card>
            </Grid>

            {/* Gráfico de CIDs */}
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#2c2f48', padding: 1, height: '100%' }}>
                <Typography variant="h6" sx={{ fontSize: 14 }} gutterBottom>
                  Quantidade de CIDs
                </Typography>
                <Bar
                  data={dataCID}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                    },
                    scales: {
                      x: { ticks: { color: '#fff', fontSize: 10 } },
                      y: { ticks: { color: '#fff', fontSize: 10 } },
                    },
                  }}
                />
              </Card>
            </Grid>

            {/* Gráfico de Análises Interativas */}
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#2c2f48', padding: 1, height: '100%' }}>
                <Typography variant="h6" sx={{ fontSize: 14 }} gutterBottom>
                  Análises Interativas no Chat AI
                </Typography>
                <Bar
                  data={dataAI}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                    },
                    scales: {
                      x: { ticks: { color: '#fff', fontSize: 10 } },
                      y: { ticks: { color: '#fff', fontSize: 10 } },
                    },
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
