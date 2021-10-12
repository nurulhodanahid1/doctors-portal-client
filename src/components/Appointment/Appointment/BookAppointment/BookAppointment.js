import React from 'react';

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className="text-center" style={{color:"#2BC9BE"}}>Available appointment on {date.toDateString()}</h2>
        </section>
    );
};

export default BookAppointment;