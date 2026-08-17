import React, { useState, useEffect } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        type: 'General Inquiry'
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));
    };

    // Form validations running via useEffect
    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const newErrors = {};

        if (touched.name && !formData.name.trim()) {
            newErrors.name = "Name is required.";
        }
        if (touched.email) {
            if (!formData.email.trim()) {
                newErrors.email = "Email is required.";
            } else if (!emailRegex.test(formData.email)) {
                newErrors.email = "Please enter a valid email address.";
            }
        }
        if (touched.message) {
            if (!formData.message.trim()) {
                newErrors.message = "Message is required.";
            } else if (formData.message.trim().length < 10) {
                newErrors.message = "Message must be at least 10 characters.";
            }
        }

        setErrors(newErrors);
    }, [formData, touched]);

    // Check if the form is fully valid to enable the submit button
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormValid = 
        formData.name.trim() !== '' && 
        formData.email.trim() !== '' && 
        emailRegex.test(formData.email) && 
        formData.message.trim().length >= 10;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            setSuccessMessage("Thank you! Your message has been sent successfully.");
            setFormData({ name: '', email: '', message: '', type: 'General Inquiry' });
            setTouched({ name: false, email: false, message: false });
            
            // Clear success message after 5 seconds
            const timer = setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-group">
                <label htmlFor="form-name">Name</label>
                <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your full name"
                    required
                />
                {touched.name && errors.name && (
                    <span className="form-error" role="alert">{errors.name}</span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="form-email">Email Address</label>
                <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email address"
                    required
                />
                {touched.email && errors.email && (
                    <span className="form-error" role="alert">{errors.email}</span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="form-type">Category</label>
                <select
                    id="form-type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Feedback">Feedback / Suggestions</option>
                    <option value="Collaboration">Collaboration Proposal</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="form-message">Message</label>
                <textarea
                    id="form-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="6"
                    placeholder="Write your message here (min. 10 characters)"
                    required
                ></textarea>
                {touched.message && errors.message && (
                    <span className="form-error" role="alert">{errors.message}</span>
                )}
            </div>

            <button 
                type="submit" 
                className="btn" 
                disabled={!isFormValid}
                style={{ opacity: isFormValid ? 1 : 0.6, cursor: isFormValid ? 'pointer' : 'not-allowed' }}
            >
                Send Message
            </button>

            {successMessage && (
                <p className="form-success-msg" role="status">{successMessage}</p>
            )}
        </form>
    );
}
