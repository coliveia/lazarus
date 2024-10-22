import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChatIcon from '@mui/icons-material/Chat';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'; // Ícone para HealthChain
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'; // Ícone para Hospitais

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 60, // Largura reduzida da barra lateral
        backgroundColor: '#0a0a0a', // Cor azul escuro quase preto
        height: '100vh',
        display: 'flex',
        flexDirection: 'column', // Para permitir que os itens ocupem o espaço vertical
        alignItems: 'center', // Para centralizar os ícones
      }}
    >
      {/* Logotipo do HealthChain */}
      <Box sx={{ margin: 2 }}>
        <HealthAndSafetyIcon style={{ color: '#fff', fontSize: 40 }} />
      </Box>

      <List sx={{ flexGrow: 1, width: '100%', padding: 0 }}>
        {/* Link para Home */}
        <ListItem
          button
          component={Link}
          to="/home"
          sx={{ justifyContent: 'center', textAlign: 'center', padding: 0, marginBottom: 3 }} // Aumentando marginBottom
        >
          <ListItemIcon sx={{ justifyContent: 'center' }}>
            <HomeIcon style={{ color: '#fff', fontSize: 30 }} />
          </ListItemIcon>
        </ListItem>

        {/* Link para Hospitais */}
        <ListItem
          button
          component={Link}
          to="/hospitals"
          sx={{ justifyContent: 'center', textAlign: 'center', padding: 0, marginBottom: 3 }} // Aumentando marginBottom
        >
          <ListItemIcon sx={{ justifyContent: 'center' }}>
            <LocalHospitalIcon style={{ color: '#fff', fontSize: 30 }} />
          </ListItemIcon>
        </ListItem>

        {/* Link para Dashboard / Relatórios */}
        <ListItem
          button
          component={Link}
          to="/dashboard"
          sx={{ justifyContent: 'center', textAlign: 'center', padding: 0, marginBottom: 3 }} // Aumentando marginBottom
        >
          <ListItemIcon sx={{ justifyContent: 'center' }}>
            <BarChartIcon style={{ color: '#fff', fontSize: 30 }} />
          </ListItemIcon>
        </ListItem>

        {/* Link para Chat AI */}
        <ListItem
          button
          component={Link}
          to="/chat-ai"
          sx={{ justifyContent: 'center', textAlign: 'center', padding: 0, marginBottom: 3 }} // Aumentando marginBottom
        >
          <ListItemIcon sx={{ justifyContent: 'center' }}>
            <ChatIcon style={{ color: '#fff', fontSize: 30 }} />
          </ListItemIcon>
        </ListItem>

        {/* Link para Agenda */}
        <ListItem
          button
          component={Link}
          to="/agenda"
          sx={{ justifyContent: 'center', textAlign: 'center', padding: 0, marginBottom: 3 }} // Aumentando marginBottom
        >
          <ListItemIcon sx={{ justifyContent: 'center' }}>
            <EventIcon style={{ color: '#fff', fontSize: 30 }} />
          </ListItemIcon>
        </ListItem>
      </List>

      {/* Link para Logout, posicionado no fundo da barra lateral */}
      <ListItem
        button
        component={Link}
        to="/logout"
        sx={{ justifyContent: 'center', textAlign: 'center', padding: 0 }}
      >
        <ListItemIcon sx={{ justifyContent: 'center' }}>
          <LogoutIcon style={{ color: '#fff', fontSize: 30 }} />
        </ListItemIcon>
      </ListItem>
    </Box>
  );
};

export default Sidebar;
