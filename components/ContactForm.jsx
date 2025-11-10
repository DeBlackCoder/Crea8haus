'use client'

import { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        setTimeout(() => {
            setStatus('Thank you for your message! We will be in touch shortly.');
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className='contact-form'>
            <h3>Send a message</h3>

            <div className='form-group'>
                <label htmlFor="name">Full Name</label>
                <input type='text' id='name' required />
            </div>

            <div className='form-group'>
                <label htmlFor="email">Email Address</label>
                <input type='email' id='email' required />
            </div>

            <div className='form-group'>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows='6' required></textarea>
            </div>

            <button type='submit' className='submit-button'>
                {status || 'Send Message'}
            </button>

            {status && status !== 'Sending...' && <p className='form-status'>{status}</p>}
        </form>
    );
};

export default ContactForm;
