// import React from "react";

import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Här skulle du vanligtvis skicka data till en server eller hantera submittningen
        console.log('Form submitted:', { name, phone, message });

        // Resetta formuläret efter submittning
        setName('');
        setPhone('');
        setMessage('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="formData">
                <label htmlFor="name">Ditt namn:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ange ditt namn"
                    required
                />
            </div>

            <div className="formData">                <label htmlFor="phone">Ditt telefonnummer:</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ange ditt telefonnummer"
                    required
                />
            </div>

            <div className="formData">                <label htmlFor="message">Ditt meddelande:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ange ditt meddelande här..."
                    required
                ></textarea>
            </div>

            <button type="submit">Skicka</button>
        </form>
    );
};

export default ContactForm;

