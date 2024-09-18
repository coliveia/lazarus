import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  Container, Paper, Typography, Card, CardContent, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { format, addDays, isBefore } from 'date-fns';

const PatientDetail = () => {
  const navigate = useNavigate();

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

      {/* Aqui os cards expansíveis (Accordion) */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Plano de Saúde</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">{patient.insurancePlan}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Tempo de Internação</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">{patient.hospitalizationTime}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Medicamentos Sugeridos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">{patient.suggestedMedications}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Conta Hospitalar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">{patient.hospitalAccount}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Coberturas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">{patient.coverages}</Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default PatientDetail;
