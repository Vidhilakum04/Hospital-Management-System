import React, { useState } from 'react';
import '../styles/PatientInfo.css'; // Correct path

function PatientInfo() {
    const [patient, setPatient] = useState({ name: '', age: '', medicalHistory: '' });

    const handleChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Patient Information Updated:\nName: ${patient.name}\nAge: ${patient.age}\nHistory: ${patient.medicalHistory}`);
        setPatient({ name: '', age: '', medicalHistory: '' });
    };

    return (
        <div className="patient-info">
            <h2>Update Patient Information</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={patient.name}
                    onChange={handleChange}
                    placeholder="Patient Name"
                    required
                />
                <input
                    type="number"
                    name="age"
                    value={patient.age}
                    onChange={handleChange}
                    placeholder="Age"
                    required
                />
                <textarea
                    name="medicalHistory"
                    value={patient.medicalHistory}
                    onChange={handleChange}
                    placeholder="Medical History"
                    required
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default PatientInfo;
