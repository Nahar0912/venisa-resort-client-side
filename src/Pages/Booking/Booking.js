import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Booking = () => {
    const { serviceId } = useParams();
    const [bookings, setBookings] = useState([]);
    
    const [singleBooking, setSingleBooking] = useState({});

    
    useEffect(() => {
        fetch('https://aqueous-basin-68815.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);


    useEffect(() => {
        const Bookinginfo = bookings.find((data) => data.id === serviceId)
        setSingleBooking(Bookinginfo);
    }, [bookings]);

    return (
        <div>
            <h2>Welcome to our Resort: {singleBooking?.name}</h2>
            <br />
            <div>
            <img src={singleBooking?.img} alt="" width='500px'/>
            </div>
            <br />
            <div>
                <p>{ singleBooking?.info}</p>
            </div>
        </div>
    );
};

export default Booking;