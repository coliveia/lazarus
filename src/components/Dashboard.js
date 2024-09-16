import React from 'react';
import { Container, Grid, Paper, Typography, Card, CardContent} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrando os componentes do ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Exemplo de dados para gráficos
  const data = {
    labels: ['Hospital A', 'Hospital B', 'Hospital C'],
    datasets: [
      {
        label: 'Número de Pacientes',
        data: [15, 40, 20],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container component={Paper} elevation={3} maxWidth="lg" sx={{ padding: 4, marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard de Relatórios
      </Typography>
      
      <Grid container spacing={4}>
        {/* Relatório de Pacientes por Hospital */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pacientes por Hospital
              </Typography>
              <Bar
                data={data}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    tooltip: {
                      callbacks: {
                        label: function (tooltipItem) {
                          return `Pacientes: ${tooltipItem.raw}`;
                        },
                      },
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Relatório de Planos de Saúde */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Planos de Saúde
              </Typography>
              <Typography variant="body1">
                Exibir lista de planos de saúde com contagem de pacientes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Relatório de Medicamentos Utilizados */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Medicamentos Utilizados
              </Typography>
              <Typography variant="body1">
                Exibir lista de medicamentos utilizados com frequência.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Relatório de Suprimentos Utilizados */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Suprimentos Utilizados
              </Typography>
              <Typography variant="body1">
                Exibir lista de suprimentos utilizados com frequência.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Média de Tempo de Internação */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Média de Tempo de Internação
              </Typography>
              <Typography variant="body1">
                Exibir média de tempo de internação dos pacientes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Relatório de Conta Hospitalar */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Conta Hospitalar
              </Typography>
              <Typography variant="body1">
                Exibir relatórios de conta hospitalar e despesas.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
