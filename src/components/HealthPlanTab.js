import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import CoverageSubTab from './CoverageSubTab';

const HealthPlanTab = ({ plan }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="h6">Plano de Saúde: {plan.coverage}</Typography>
      <Tabs value={value} onChange={handleChange} aria-label="health plan tabs">
        <Tab label="Coberturas" />
        {/* Adicione outras abas se necessário */}
      </Tabs>
      <Box sx={{ p: 3 }}>
        {value === 0 && <CoverageSubTab coverage={plan.coverage} />}
        {/* Renderize outros conteúdos das abas aqui */}
      </Box>
    </>
  );
};

export default HealthPlanTab;
