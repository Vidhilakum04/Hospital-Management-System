import React, { useState } from 'react';
import '../styles/ServicesOverview.css'; // Correct path

function ServicesOverview() {
    const services = [
        { name: 'General Consultation', details: 'Comprehensive health check-ups and general medical consultations.' },
        { name: 'Cardiology', details: 'Specialized care for heart conditions, including diagnosis and treatment.' },
        { name: 'Neurology', details: 'Expert care for neurological disorders and brain health.' },
        { name: 'Orthopedics', details: 'Treatment for bone, joint, and muscle issues.' },
        { name: 'Pediatrics', details: 'Medical care for infants, children, and adolescents.' },
    ];

    const [selectedService, setSelectedService] = useState(null);
    const [bookingDetails, setBookingDetails] = useState({ name: '', date: '' });

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    const handleBookingChange = (e) => {
        setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        alert(`Booking confirmed for ${bookingDetails.name} on ${bookingDetails.date} for ${selectedService.name}`);
        setSelectedService(null);
        setBookingDetails({ name: '', date: '' });
    };

    return (
        <div className="services-overview">
            <h2>Services Overview</h2>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>
                        <span onClick={() => handleServiceClick(service)}>{service.name}</span>
                        <button onClick={() => handleServiceClick(service)}>Book Now</button>
                    </li>
                ))}
            </ul>
            {selectedService && (
                <div className="service-details">
                    <h3>{selectedService.name}</h3>
                    <p>{selectedService.details}</p>
                    <form onSubmit={handleBookingSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={bookingDetails.name}
                            onChange={handleBookingChange}
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="date"
                            name="date"
                            value={bookingDetails.date}
                            onChange={handleBookingChange}
                            required
                        />
                        <button type="submit">Confirm Booking</button>
                    </form>
                    <button onClick={() => setSelectedService(null)}>Close</button>
                </div>
            )}
        </div>
    );
}

export default ServicesOverview;
