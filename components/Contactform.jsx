
import React, { useState } from 'react';
import { css } from '@emotion/css'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Normalt skulle jag skicka data till en server här
        console.log('Form submitted:', { name, phone, message });

        // Detta gör en reset efter submit
        setName('');
        setPhone('');
        setMessage('');
    };

    return (
        <form className={css` margin-top: 50px;
//   display: grid;
//   display: inline-block;
display:flex;
flex-direction:column;
padding:50px;
   display: flex;
  align-items: center;
  justify-content: center;
`} onSubmit={handleSubmit}>
            <div className={css` color: rgb(46, 218, 60);
  font-weight: 500;
  margin:10px 10px 30px 0px;`} >
                <label className={css`margin:10px 10px 30px 0px;`} htmlFor="name">Ditt namn:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ange ditt namn"
                    required
                />
            </div>

            <div className={css` color: rgb(46, 218, 60);
  font-weight: 500;   margin:10px 10px 30px 0px;`}>               
                <label className={css`margin:10px 10px 30px 0px;`} htmlFor="phone">Ditt telefonnummer:</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ange ditt telefonnummer"
                    required
                />
            </div>

            <div className={css` color: rgb(46, 218, 60);
  font-weight: 500;   margin:10px 10px 30px 0px;`}>                
                <label className={css`margin:10px 10px 30px 0px;`} htmlFor="message">Ditt meddelande:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ange ditt meddelande här..."
                    required
                ></textarea>
            </div>

            <button className={css`background-color:green;
        color: White;`} type="submit">Skicka</button>
        </form>
    );
};

export default ContactForm;

