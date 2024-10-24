import React, { useState } from 'react';
import { Container, Paper, Typography, Box, Button, Grid, Card, CardContent, List, ListItem, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const BillAnalysis = () => {
  const [selectedBill, setSelectedBill] = useState(null);
  const [openMedicamentos, setOpenMedicamentos] = useState(false);
  const [openMateriais, setOpenMateriais] = useState(false);

  const bills = [
    { id: 1, code: '235841238', total: 'R$ 1.350,23', date: '15/10/2024' },
    { id: 2, code: '235841239', total: 'R$ 900,00', date: '10/10/2024' },
    { id: 3, code: '235841240', total: 'R$ 750,50', date: '05/10/2024' },
  ];

  // Simulação de dados de medicamentos e suprimentos
  const medicamentos = [
    { nome: 'Medicamento A', laboratorio: 'Lab A', valor: 'R$ 100,00' },
    { nome: 'Medicamento B', laboratorio: 'Lab B', valor: 'R$ 200,00' },
  ];

  const materiais = [
    { nome: 'Material A', laboratorio: 'Lab A', valor: 'R$ 50,00' },
    { nome: 'Material B', laboratorio: 'Lab B', valor: 'R$ 75,00' },
  ];

  const handleSelectBill = (bill) => {
    setSelectedBill(bill);
  };

  const handleOpenMedicamentos = () => setOpenMedicamentos(true);
  const handleCloseMedicamentos = () => setOpenMedicamentos(false);

  const handleOpenMateriais = () => setOpenMateriais(true);
  const handleCloseMateriais = () => setOpenMateriais(false);

  return (
    <Container component={Paper} elevation={3} maxWidth="lg" sx={{ padding: 4, marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        Análise De Contas Médicas
      </Typography>

      {/* Lista de Contas Médicas */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Lista de Contas
        </Typography>
        <List>
          {bills.map((bill) => (
            <ListItem 
              key={bill.id} 
              button 
              onClick={() => handleSelectBill(bill)} 
              sx={{ backgroundColor: selectedBill?.id === bill.id ? '#e0f7fa' : 'transparent', mb: 1, borderRadius: 2 }}>
              <ListItemText 
                primary={`ID: ${bill.code} - Total: ${bill.total}`} 
                secondary={`Data: ${bill.date}`} 
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Detalhes da Conta Selecionada */}
      {selectedBill && (
        <>
          <Paper sx={{ padding: 2, mb: 3 }}>
            <Typography variant="h6">ID: {selectedBill.code}</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="body1">Data da Solicitação: 15/10/2024</Typography>
                <Typography variant="body1">Data da Autorização: 15/10/2024</Typography>
                <Typography variant="body1">Código Operadora: S1 5711</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body1">CID Principal: A90</Typography>
                <Typography variant="body1">Descrição: Dengue</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body1">Total Geral: {selectedBill.total}</Typography>
              </Grid>
            </Grid>
          </Paper>

          {/* Descrição */}
          <Paper sx={{ padding: 2, mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="body1">Plano: TOP Nacional</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body1">Hospital: Hospital São Luiz</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body1">CRM: 61230</Typography>
              </Grid>
            </Grid>
          </Paper>

          {/* Seção Contas Médicas */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5">Contas Médicas</Typography>
            <Button variant="contained" color="secondary">Analisar</Button>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">R$ 433,00</Typography>
                  <Typography variant="body1">Total de Taxas de Aluguéis</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">R$ 105,23</Typography>
                  <Typography variant="body1">Total de Materiais</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">R$ 656,00</Typography>
                  <Typography variant="body1">Total de Procedimentos</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">R$ 156,00</Typography>
                  <Typography variant="body1">Total de Medicamentos</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Recursos - Medicamentos e Suprimentos */}
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h5">Lista de Recursos</Typography>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={12} md={3}>
                <Card onClick={handleOpenMateriais}>
                  <CardContent>
                    <Typography variant="body1">Materiais</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={3}>
                <Card onClick={handleOpenMedicamentos}>
                  <CardContent>
                    <Typography variant="body1">Medicamentos</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Tempo Médio de Internação */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
            <Box sx={{ backgroundColor: '#f9f9f9', padding: 2 }}>
              <Typography variant="h6">Tempo Médio de Internação</Typography>
              <Typography variant="h1" color="primary">5</Typography>
              <Typography variant="body1">Dias</Typography>
            </Box>
            <Box sx={{ padding: 2 }}>
              <Typography variant="body1">Previsão de Alta: 20/10/2024</Typography>
            </Box>
          </Box>

          {/* Popup para Medicamentos */}
          <Dialog open={openMedicamentos} onClose={handleCloseMedicamentos}>
            <DialogTitle>Lista de Medicamentos</DialogTitle>
            <DialogContent>
              {medicamentos.map((med, index) => (
                <Box key={index} sx={{ marginBottom: 2 }}>
                  <Typography variant="body1"><strong>Nome:</strong> {med.nome}</Typography>
                  <Typography variant="body1"><strong>Laboratório:</strong> {med.laboratorio}</Typography>
                  <Typography variant="body1"><strong>Valor:</strong> {med.valor}</Typography>
                </Box>
              ))}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseMedicamentos} color="primary">Fechar</Button>
            </DialogActions>
          </Dialog>

          {/* Popup para Materiais */}
          <Dialog open={openMateriais} onClose={handleCloseMateriais}>
            <DialogTitle>Lista de Materiais</DialogTitle>
            <DialogContent>
              {materiais.map((mat, index) => (
                <Box key={index} sx={{ marginBottom: 2 }}>
                  <Typography variant="body1"><strong>Nome:</strong> {mat.nome}</Typography>
                  <Typography variant="body1"><strong>Laboratório:</strong> {mat.laboratorio}</Typography>
                  <Typography variant="body1"><strong>Valor:</strong> {mat.valor}</Typography>
                </Box>
              ))}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseMateriais} color="primary">Fechar</Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Container>
  );
};

export default BillAnalysis;
