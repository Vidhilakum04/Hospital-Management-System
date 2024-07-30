import React, { useState } from 'react';
import '../styles/Testimonials.css'; // Adjust path if needed

function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    { name: 'John Doe', feedback: 'Great service and friendly staff!' },
    { name: 'Jane Smith', feedback: 'The doctors were very attentive and caring.' }
  ]);
  const [newTestimonial, setNewTestimonial] = useState({ name: '', feedback: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTestimonials([...testimonials, newTestimonial]);
    setNewTestimonial({ name: '', feedback: '' });
  };

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <ul>
        {testimonials.map((t, index) => (
          <li key={index}>
            <strong>{t.name}</strong>: {t.feedback}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={newTestimonial.name}
          onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Feedback"
          value={newTestimonial.feedback}
          onChange={(e) => setNewTestimonial({ ...newTestimonial, feedback: e.target.value })}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Testimonials;
