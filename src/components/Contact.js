import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    // You will need your own logic in order to send emails. This is only the frontend code
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '') {
            setNameError('Name is required');
        } else {
            setNameError('');
        }
        if (email.trim() === '') {
            setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
        if (message.trim() === '') {
            setMessageError('Message is required');
        } else {
            setMessageError('');
        }

        if (name && email && message) {
            console.log('Sending email:', name, email, message);
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <section id="contact">
            <div className="contact-form-container">
                <form onSubmit={handleSubmit}>
                    <h1 className="base-header" style={{textAlign: "center"}}>Contact Me</h1>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {nameError && <span className="error">{nameError}</span>}
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <span className="error">{emailError}</span>}
                    </div>
                    <textarea
                        name="message"
                        placeholder="Hey! This form does not work yet! Contact me at codeyarch456@gmail.com until this works"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{fontFamily: "inherit"}}
                    />
                    {messageError && <span className="error">{messageError}</span>}
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;