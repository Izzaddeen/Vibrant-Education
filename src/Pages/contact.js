import React, { useState } from 'react';
import '../Css/contact.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subscribe: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.phone) errors.phone = "Phone Number is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      // Proceed with form submission logic here
    }
  };

  return (
    <div className='App'>
    <div className="form-container">
      <div className="form-content">
        <h1 className='fw-bold py-5'>Ready To Start Your<br></br>
            Project</h1>
        <form className="project-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label style={{fontSize:"1.5rem", fontWeight:"400"}}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="input-group">
            <label style={{fontSize:"1.5rem", fontWeight:"400"}}>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div className="input-group">
            <label style={{fontSize:"1.5rem", fontWeight:"400"}}>E-Mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="checkbox-group pt-4">
            <input
            style={{background:"none", width:"10%"}}
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            <label htmlFor="subscribe" style={{fontSize:"1.1rem"}}>
              By checking the box, you agree to subscribe to our newsletter and stay updated on the latest news, offers, and insights. Join our community for exclusive content and valuable information!
            </label>
          </div>
        </form>
      </div>
      <div className="form-description">
        <p>
          Fill in the details, and unlock a free one-hour consultation with our experts. Let's collaborate to turn your vision into a successful reality.
        </p>
        <div className=' button-container d-flex justify-content-left mt-5'><button type="submit" className="submit-button">SUBMIT</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;

