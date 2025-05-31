import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(''); 
    setErrors({});      

    if (!validateForm()) {
      setStatusMessage('Please correct the errors in the form.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', { // Your backend API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatusMessage(`Error: ${result.message || 'Something went wrong.'}`);
        if (result.errors) {
            const serverErrors = {};
            result.errors.forEach(err => {
                if (err.toLowerCase().includes('name')) serverErrors.name = err;
                else if (err.toLowerCase().includes('email')) serverErrors.email = err;
                else if (err.toLowerCase().includes('message')) serverErrors.message = err;
            });
            setErrors(serverErrors);
        }
        throw new Error(result.message || `HTTP error! status: ${response.status}`);
      }

      setStatusMessage(result.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      console.error('Failed to send message:', error);
      if (!statusMessage) {
        setStatusMessage('Failed to send message. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container page-container contact-page-wrapper"> {/* Added contact-page-wrapper */}
      <h1 className="page-title" style={{ textAlign: 'center' }}>Contact Us</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Have questions or want to learn more? Reach out to us!
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate> {/* noValidate disables browser's default validation UI */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className={errors.message ? 'input-error' : ''}
          ></textarea>
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        {statusMessage && (
          <p className={`status-message ${errors && Object.keys(errors).length > 0 && !statusMessage.toLowerCase().includes('successfully') ? 'error' : 'success'}`}>
            {statusMessage}
          </p>
        )}

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;