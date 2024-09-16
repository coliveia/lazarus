import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddPatientForm = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [dob, setDob] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar lógica para enviar os dados do paciente para o backend ou para o estado global
    console.log({
      name,
      cpf,
      dob,
      diagnosis,
    });

    // Após adicionar o paciente, redireciona para a lista de pacientes
    navigate('/hospitals'); // Ajuste o caminho conforme necessário
  };

  return (
    <Container component={Paper} elevation={3} maxWidth="sm" sx={{ padding: 3, marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>Adicionar Novo Paciente</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="CPF"
          fullWidth
          margin="normal"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
        <TextField
          label="Data de Nascimento"
          fullWidth
          margin="normal"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <TextField
          label="Diagnóstico"
          fullWidth
          margin="normal"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">Adicionar Paciente</Button>
      </form>
    </Container>
  );
};

export default AddPatientForm;
