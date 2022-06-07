import React from 'react';
import Grid from '@mui/material/Grid';

const LandingPage = () => {
  return (
    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction="row">
      <Grid item xs={12} sm={6} md={6}>
        <div>xs=12 md=6 sm=6</div>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <div>xs=12 md=6 sm=6</div>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
