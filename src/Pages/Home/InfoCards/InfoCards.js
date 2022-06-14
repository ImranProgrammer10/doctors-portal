import { Container, Grid } from '@mui/material';
 
 


import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
const infoData=[
    {
        title:'Opening Hours',
        description:'We are open 7 days',
   
   
        background:'#1CC7C1'
    },
    {
        title:'Visit Our Location',
        description:'Broklyn,NY 10003 USA',
      
        background:'#3A4256'
    },
    {
        title:'Call Us Now',
        description:'+156789123',
  
        background:'#1CC7C1'
    },
]
const InfoCards = () => {
    return (
        <Container>
         <Grid container spacing={3}>
         {
                    infoData.map(data => <InfoCard
                        key={data.title}
                        data={data}
                   
                        
                    >
                    </InfoCard>)
                }
         </Grid>
        </Container>
    );
};

export default InfoCards;