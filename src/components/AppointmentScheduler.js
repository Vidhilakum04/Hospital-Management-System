import React, { useState } from 'react';
import '../styles/AppointmentScheduler.css'; // Correct path

function AppointmentScheduler() {
    const [appointment, setAppointment] = useState({ name: '', date: '', time: '' });

    const handleChange = (e) => {
        setAppointment({ ...appointment, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Appointment scheduled for ${appointment.name} on ${appointment.date} at ${appointment.time}`);
        setAppointment({ name: '', date: '', time: '' });
    };

    return (
        <div className="appointment-scheduler">
            <h2>Schedule an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={appointment.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={appointment.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="time"
                    name="time"
                    value={appointment.time}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Schedule</button>
            </form>
        </div>
    );
}

export default AppointmentScheduler;
