import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Paper, Typography, Card, CardContent, Tabs, Tab, Divider, Button } from '@mui/material';
import { format, addDays, isBefore, differenceInDays } from 'date-fns';

const PatientDetail = () => {
  
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = React.useState(0);

  // Dados do paciente (exemplo)
  const patient = {
    name: 'Paciente Exemplo',
    cpf: '123.456.789-00',
    dob: '01/01/1980',
    diagnosis: 'Diagnóstico Exemplo',
    admissionDate: new Date(2024, 8, 8), // Exemplo: 15 de setembro de 2024
    averageHospitalizationDays: 2, // Tempo médio de internação em dias
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
      const daysRemaining = differenceInDays(dischargeDate, today);
      return daysRemaining === 1 ? '#fff9c4' : '#fce4ec'; // Amarelo se faltar um dia, rosa caso contrário
    }
    return '#ffcdd2'; // Vermelho se a previsão de alta já passou
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
        <Tabs value={tabIndex} onChange={handleChange} aria-label="Paciente Details Tabs">
          <Tab label="Plano de Saúde" />
          <Tab label="Tempo de Internação" />
          <Tab label="Medicamentos Sugeridos" />
          <Tab label="Conta Hospitalar" />
          <Tab label="Coberturas" />
        </Tabs>
        <Divider />
        <Box sx={{ p: 3 }}>
          {tabIndex === 0 && (
            <Typography variant="body1">{patient.insurancePlan}</Typography>
          )}
          {tabIndex === 1 && (
            <Typography variant="body1">{patient.hospitalizationTime}</Typography>
          )}
          {tabIndex === 2 && (
            <Typography variant="body1">{patient.suggestedMedications}</Typography>
          )}
          {tabIndex === 3 && (
            <Typography variant="body1">{patient.hospitalAccount}</Typography>
          )}
          {tabIndex === 4 && (
            <Typography variant="body1">{patient.coverages}</Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default PatientDetail;
