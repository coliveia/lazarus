import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  IconButton,
  Divider,
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { Bar } from 'react-chartjs-2';

const ChatAI = () => {
  // Estado para armazenar a mensagem e as mensagens do chat
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { text: 'Olá! Estou aqui para ajudar com suas perguntas.', sender: 'AI' },
  ]);

  // Dados fictícios para o gráfico
  const data = {
    labels: ['Aprovados', 'Reprovados'],
    datasets: [
      {
        label: 'Pacientes',
        data: [12, 5],
        backgroundColor: ['#4caf50', '#f44336'],
      },
    ],
  };

  // Função para lidar com o envio da mensagem
  const handleSendMessage = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (message.trim()) {
      setChatMessages([...chatMessages, { text: message, sender: 'User' }]);
      setMessage(''); // Limpa o campo de entrada
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={3}>
        {/* Card de Histórico */}
        <Grid item xs={4}>
          <Paper sx={{ p: 2, backgroundColor: '#ffffff', boxShadow: 3 }}>
            <Typography variant="h6">Histórico de Pesquisas</Typography>
            <Divider sx={{ mb: 2 }} />
            {/* Histórico de exemplos */}
            {[...Array(5)].map((_, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body2">
                  Pesquisa #{index + 1} - {new Date().toLocaleDateString()}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>

        {/* Card de Análise Interativa */}
        <Grid item xs={4}>
          <Paper sx={{ p: 2, backgroundColor: '#ffffff', boxShadow: 3 }}>
            <Typography variant="h6">Análise Interativa</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ maxHeight: '300px', overflowY: 'auto', mb: 2 }}>
              {/* Exibe as mensagens do chat */}
              {chatMessages.map((msg, index) => (
                <Typography key={index} variant="body2" sx={{ mb: 1, textAlign: msg.sender === 'User' ? 'right' : 'left' }}>
                  {msg.sender}: {msg.text}
                </Typography>
              ))}
            </Box>
            <Box component="form" onSubmit={handleSendMessage} sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="primary">
                <AttachFileIcon />
              </IconButton>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Digite sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <IconButton type="submit" color="primary">
                <SendIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>

        {/* Card de Aprovações e Próximos Passos */}
        <Grid item xs={4}>
          <Paper sx={{ p: 2, backgroundColor: '#ffffff', boxShadow: 3 }}>
            <Typography variant="h6">Aprovações e Próximos Passos</Typography>
            <Divider sx={{ mb: 2 }} />
            <Bar data={data} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatAI;
