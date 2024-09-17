import React from 'react';
import { Container, Paper, Typography, List, ListItem, ListItemText, Card, CardContent } from '@mui/material';
import { formatDistanceToNow } from 'date-fns';

const notifications = [
  { id: 1, message: 'Nova atualização no plano de saúde.', date: new Date() },
  { id: 2, message: 'Seu pedido de alta foi aprovado.', date: new Date(new Date().setDate(new Date().getDate() - 1)) },
  { id: 3, message: 'Lembre-se de renovar sua cobertura.', date: new Date(new Date().setDate(new Date().getDate() - 2)) },
];

const NotificationPage = () => {
  return (
    <Container component={Paper} elevation={3} maxWidth="md" sx={{ padding: 4, marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>Notificações</Typography>
      <Card>
        <CardContent>
          <List>
            {notifications.map(notification => (
              <ListItem key={notification.id} sx={{ mb: 2 }}>
                <ListItemText
                  primary={notification.message}
                  secondary={`Há ${formatDistanceToNow(notification.date, { addSuffix: true })}`}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NotificationPage;
