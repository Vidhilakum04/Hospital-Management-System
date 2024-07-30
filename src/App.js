import React from 'react';
import './styles/App.css'; // Ensure this path is correct
import AppointmentScheduler from './components/AppointmentScheduler';
import PatientInfo from './components/PatientInfo';
import ServicesOverview from './components/ServicesOverview';
import Testimonials from './components/Testimonials'; // Ensure this component exists
import DarkModeToggle from './components/DarkModeToggle'; // Correct path

function App() {
  return (
    <div className="app">
      <DarkModeToggle /> {/* Ensure this component is imported and used correctly */}
      <h1>Hospital Management System</h1>
      <AppointmentScheduler />
      <PatientInfo />
      <ServicesOverview />
      <Testimonials />
    </div>
  );
}

export default App;
