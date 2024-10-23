import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, IconButton, List, ListItem, ListItemText, Avatar } from '@mui/material';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Ícones para navegação
import { addDays, startOfWeek, format, subWeeks, addWeeks, addMonths, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale'; // Importando o locale em português

const appointments = [
  { id: 1, cid: 'A91', status: 'Rejeitado', color: 'red', date: '2024-10-25', days: 5 },
  { id: 2, cid: 'A91', status: 'Aprovado', color: 'green', date: '2024-10-25', days: 2 },
  { id: 3, cid: 'A91', status: 'Em andamento', color: 'yellow', date: '2024-10-25', days: 4 },
  { id: 4, cid: 'B12', status: 'Em andamento', color: 'yellow', date: '2024-10-22', days: 4 },
  { id: 5, cid: 'C34', status: 'Rejeitado', color: 'red', date: '2024-10-22', days: 3 },
  { id: 6, cid: 'D56', status: 'Aprovado', color: 'green', date: '2024-10-23', days: 1 },
  { id: 7, cid: 'E78', status: 'Aprovado', color: 'green', date: '2024-10-24', days: 2 },
];

const legend = [
  { status: '0 - 3 Dias', color: 'red' },
  { status: '4 - 5 Dias', color: 'yellow' },
  { status: 'Mais que 5 Dias', color: 'green' }
];

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Função para mudar a semana
  const handleWeekChange = (direction) => {
    if (direction === 'prev') {
      setSelectedDate(subWeeks(selectedDate, 1));
    } else {
      setSelectedDate(addWeeks(selectedDate, 1));
    }
  };

  // Função para pegar os dias da semana
  const getWeekDays = () => {
    const startOfCurrentWeek = startOfWeek(selectedDate, { weekStartsOn: 1 }); // Começando a semana na segunda-feira
    return [...Array(7)].map((_, index) => addDays(startOfCurrentWeek, index));
  };

  // Função para navegar entre os meses
  const handleMonthChange = (direction) => {
    if (direction === 'prev') {
      setCurrentMonth(subMonths(currentMonth, 1));
    } else {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const weekDays = getWeekDays(); // Pegar os dias da semana com base na data selecionada
  

  return (
    <Box sx={{ display: 'flex', padding: 3, height: '100vh' }}>
      {/* Área Principal */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h5" gutterBottom>
          Painel de Internações
        </Typography>
        
        {/* Cabeçalho com navegação da semana */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
          <IconButton onClick={() => handleWeekChange('prev')}>
            <FaChevronLeft />
          </IconButton>
          <Typography variant="h6">{`${format(weekDays[0], 'd MMM', { locale: ptBR })} - ${format(weekDays[6], 'd MMM', { locale: ptBR })} de ${format(selectedDate, 'yyyy')}`}</Typography>
          <IconButton onClick={() => handleWeekChange('next')}>
            <FaChevronRight />
          </IconButton>
        </Box>

        {/* Grid com os dias da semana */}
        <Grid container spacing={2} justifyContent="space-between" sx={{ height: '100%' }}>
          {weekDays.map((day, index) => (
            <Grid item xs={12} sm={6} md={1.7} key={index} sx={{ height: '100%' }}>
              <Paper elevation={3} sx={{ padding: 2, minHeight: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Typography variant="body1" gutterBottom>{format(day, 'EEEE', { locale: ptBR })}</Typography>
                <List>
                  {appointments
                    .filter((appointment) => format(new Date(appointment.date), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'))
                    .map((appointment) => (
                      <Box key={appointment.id} sx={{ backgroundColor: '#f9f9f9', padding: '8px', borderRadius: '5px', marginBottom: '8px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)' }}>
                        <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                          ID: {appointment.id} - CID: {appointment.cid}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                          {appointment.days} Dias
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '4px' }}>
                          <Avatar sx={{ bgcolor: appointment.color, width: 16, height: 16 }} />
                          <IconButton size="small" sx={{ marginLeft: 1 }}>
                            <FaSearch />
                          </IconButton>
                        </Box>
                      </Box>
                    ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Legenda e calendário */}
      <Box sx={{ width: 250, marginLeft: 3 }}>
        <Typography variant="h6">Legenda</Typography>
        <List>
          {legend.map((item, index) => (
            <ListItem key={index}>
              <Avatar
                sx={{
                  bgcolor: item.color,
                  width: 16,
                  height: 16,
                  marginRight: 2,
                }}
              />
              <ListItemText primary={item.status} />
            </ListItem>
          ))}
        </List>

        {/* Calendário interativo */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <IconButton onClick={() => handleMonthChange('prev')}>
              <FaChevronLeft />
            </IconButton>
            <Typography variant="h6" gutterBottom>
              {format(currentMonth, 'MMMM yyyy', { locale: ptBR })}
            </Typography>
            <IconButton onClick={() => handleMonthChange('next')}>
              <FaChevronRight />
            </IconButton>
          </Box>
          <List sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1, fontSize: '0.75rem' }}>
            {[...Array(31)].map((_, day) => (
              <ListItem key={day + 1} sx={{ textAlign: 'center', padding: '6px', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}
                onClick={() => handleWeekChange(day + 1)}
              >
                {day + 1}
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default Agenda;
