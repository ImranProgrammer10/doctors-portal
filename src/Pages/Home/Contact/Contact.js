import { Button, Container, makeStyles, TextField, Typography } from '@mui/material';
import React from 'react';

const Contact = () => {
   
  
    return (
        <Container style={{ background:'#3A4256',
        height:500}}>
           <div>
           <Container   maxWidth='md'>
                <Typography sx={{m:1}}   variant='h6' color='#19D3AE'>Contact Us</Typography>
                    <Typography sx={{m:1}}   variant='h4' color='#fff'>Always conncet with us</Typography>
                    <TextField required fullWidth placeholder='Email' sx={{backgroundColor:'#fff',borderRadius:1,m:1}}></TextField>
                    <TextField required fullWidth placeholder='Subject' sx={{backgroundColor:'#fff',borderRadius:1,m:1}}></TextField>
                  <textarea   rows={10} placeholder='Your message'   style={{border:0,outline:0,width:'100%',margin:10,fontFamily:'inherit',padding:10}}></textarea>
                  <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Submit</Button>
                </Container>
            
           </div>
              
           
       
        </Container>
    );
};

export default Contact;