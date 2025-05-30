import React, { useState } from 'react';
import './ModalForm.css';

function ModalForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, dob, phone } = formData;

    // Collect all validation errors
    const errors = [];

    if (!username) {
      errors.push('Please fill out the Username field.');
    }
    if (!email.includes('@')) {
      errors.push('Invalid email. Please check your email address.');
    }
    if (!/^\d{10}$/.test(phone)) {
      errors.push('Invalid phone number. Please enter a 10-digit phone number.');
    }
    if (!dob) {
      errors.push('Please select your Date of Birth.');
    } else if (new Date(dob) > new Date()) {
      errors.push('Invalid date of birth.');
    }

    // If there are errors, show all of them in a single alert
    if (errors.length > 0) {
      alert(errors.join('\n')); // Combine all errors into a single alert
      return;
    }

    // Reset form and close modal on successful submission
    setFormData({ username: '', email: '', dob: '', phone: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Email Address:
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;