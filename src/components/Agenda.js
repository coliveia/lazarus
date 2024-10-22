// src/components/Agenda.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const Agenda = () => {
  // Exemplo de dados de compromissos
  const appointments = [
    { id: 1, title: 'Consulta com Dr. Silva', date: '2024-10-21', time: '10:00 AM' },
    { id: 2, title: 'Reunião com equipe', date: '2024-10-22', time: '02:00 PM' },
    { id: 3, title: 'Exame de sangue', date: '2024-10-23', time: '09:30 AM' },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Agenda
      </Typography>
      <Paper elevation={3}>
        <List>
          {appointments.map((appointment) => (
            <ListItem key={appointment.id}>
              <ListItemText
                primary={appointment.title}
                secondary={`${appointment.date} - ${appointment.time}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Agenda;
