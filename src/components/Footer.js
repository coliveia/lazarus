import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 2,
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        position: 'fixed',
        width: '100%',
        bottom: 0,
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2024 Lazarus. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
