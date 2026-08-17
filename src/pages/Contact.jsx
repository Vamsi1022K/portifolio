import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <section id="contact" className="container" style={{ paddingTop: '120px' }}>
            <div className="section-title">
                <h2>Let's Connect</h2>
                <span></span>
            </div>

            <div className="contact-box">
                <p>
                    Interested in collaborating or discussing new opportunities?
                    Feel free to drop a message using the form below.
                </p>
                
                <p style={{ fontWeight: '500', marginBottom: '30px' }}>
                    Email: vamsikr2007@gmail.com
                </p>

                <ContactForm />
            </div>
        </section>
    );
}
