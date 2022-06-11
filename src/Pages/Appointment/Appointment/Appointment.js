import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppontment from '../AvailableAppointment/AvailableAppontment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader  date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppontment date={date}></AvailableAppontment>
        </div>
    );
};

export default Appointment;