import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Booking = ({booking,date}) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}   xl={2}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    {/* <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button> */}
                </Paper>
            </Grid>
            {/* <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
            ></BookingModal> */}
        </>
    );
};

export default Booking;