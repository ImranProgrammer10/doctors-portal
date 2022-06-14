import {   Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const InfoCard = ({data}) => {
    const {title,description,background}=data;
    return (
        <>
      <Grid item xs={12} sm={6} md={4}   xl={2}>
                <Paper
                 variant='outlined' sx={{ py: 5,background:background,color:"#fff" }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
      
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {title}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {description} 
                    </Typography>
                   
                </Paper>
            </Grid>
        </>
    );
};

export default InfoCard;