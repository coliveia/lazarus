import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Paper, Typography, Card, CardContent, Tabs, Tab, Divider, Button } from '@mui/material';
import { format, addDays, isBefore} from 'date-fns';

const PatientDetail = () => {
  
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = React.useState(0);

  // Dados do paciente (exemplo)
  const patient = {
    name: 'Paciente Exemplo',
    cpf: '123.456.789-00',
    dob: '01/01/1980',
    diagnosis: 'Diagnóstico Exemplo',
    admissionDate: new Date(2024, 9, 8), // Exemplo: 8 de outubro de 2024
    averageHospitalizationDays: 10, // Tempo médio de internação em dias
    insurancePlan: 'Plano de Saúde Exemplo',
    hospitalizationTime: '2 dias',
    suggestedMedications: 'Medicamento A, Medicamento B',
    hospitalAccount: 'Conta Hospitalar Exemplo',
    coverages: 'Cobertura Exemplo',
  };

  const admissionDate = patient.admissionDate;
  const averageHospitalizationDays = patient.averageHospitalizationDays;
  const dischargeDate = addDays(admissionDate, averageHospitalizationDays);
  const today = new Date();

  const getCardColor = () => {
    if (isBefore(today, dischargeDate)) {
      return '#C8E6C9'; // Verde claro para dentro do prazo
    }
    return '#FFF59D'; // Amarelo para vencido
  };

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleGoBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <Container component={Paper} elevation={3} maxWidth="md" sx={{ padding: 4, marginTop: 5 }}>
      <Button variant="outlined" color="primary" onClick={handleGoBack} sx={{ mb: 2 }}>
        Voltar
      </Button>
      <Typography variant="h4" gutterBottom>Detalhes do Paciente</Typography>
      <Card sx={{ backgroundColor: getCardColor(), mb: 4 }}>
        <CardContent>
          <Typography variant="h6">Informações Básicas</Typography>
          <Typography variant="body1">Nome: {patient.name}</Typography>
          <Typography variant="body1">CPF: {patient.cpf}</Typography>
          <Typography variant="body1">Data de Nascimento: {patient.dob}</Typography>
          <Typography variant="body1">Diagnóstico: {patient.diagnosis}</Typography>
          <Typography variant="body1">Data de Internação: {format(admissionDate, 'dd/MM/yyyy')}</Typography>
          <Typography variant="body1">Previsão de Alta: {format(dischargeDate, 'dd/MM/yyyy')}</Typography>
        </CardContent>
      </Card>

      <Box>
        <Tabs value={tabIndex} onChange={handleChange} aria-label="Paciente Details Tabs" sx={{ mb: 2 }}>
          <Tab label="Plano de Saúde" />
          <Tab label="Tempo de Internação" />
          <Tab label="Medicamentos Sugeridos" />
          <Tab label="Conta Hospitalar" />
          <Tab label="Coberturas" />
        </Tabs>
        <Divider sx={{ mb: 2 }} />
        <Box>
          {tabIndex === 0 && (
            <Card sx={{ mb: 2, padding: 2 }}>
              <CardContent>
                <Typography variant="h6">Plano de Saúde</Typography>
                <Typography variant="body1">{patient.insurancePlan}</Typography>
              </CardContent>
            </Card>
          )}
          {tabIndex === 1 && (
            <Card sx={{ mb: 2, padding: 2 }}>
              <CardContent>
                <Typography variant="h6">Tempo de Internação</Typography>
                <Typography variant="body1">{patient.hospitalizationTime}</Typography>
              </CardContent>
            </Card>
          )}
          {tabIndex === 2 && (
            <Card sx={{ mb: 2, padding: 2 }}>
              <CardContent>
                <Typography variant="h6">Medicamentos Sugeridos</Typography>
                <Typography variant="body1">{patient.suggestedMedications}</Typography>
              </CardContent>
            </Card>
          )}
          {tabIndex === 3 && (
            <Card sx={{ mb: 2, padding: 2 }}>
              <CardContent>
                <Typography variant="h6">Conta Hospitalar</Typography>
                <Typography variant="body1">{patient.hospitalAccount}</Typography>
              </CardContent>
            </Card>
          )}
          {tabIndex === 4 && (
            <Card sx={{ mb: 2, padding: 2 }}>
              <CardContent>
                <Typography variant="h6">Coberturas</Typography>
                <Typography variant="body1">{patient.coverages}</Typography>
              </CardContent>
            </Card>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default PatientDetail;
