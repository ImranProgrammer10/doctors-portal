import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField'; 
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({open,handleClose,booking,date}) => {
    const {name,time}=booking;

    const handleBookingSubmit=e=>{
        alert('submiting')
        handleClose();
        e.preventDefault()
    }
  
    return (
        <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
           {name}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
     
          </Typography>
          <form onSubmit={handleBookingSubmit}>
          <TextField
          disabled
        sx={{width:'90%',m:1}}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
          <TextField
         
        sx={{width:'90%',m:1}}
          id="outlined-size-small"
          defaultValue='Name'
          size="small"
        />
          <TextField
           
        sx={{width:'90%',m:1}}
          id="outlined-size-small"
          defaultValue= 'Email'
          size="small"
        />
          <TextField
           
        sx={{width:'90%',m:1}}
          id="outlined-size-small"
          defaultValue= ' Phone'
          size="small"
        />
          <TextField
           
        sx={{width:'90%',m:1}}
        disabled
          id="outlined-size-small"
          defaultValue= {date.toDateString()}
          size="small"
        />
            <Button type="submit" variant="contained">Book</Button>
          </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;