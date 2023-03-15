import React, { useState } from 'react';

const Contact = () => {

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    // For a frontend only contact form, I am using mailto, a better solution may use backend code for this process
    const redirectMailto = (e) => {
        e.preventDefault()
        window.location.href = `mailto:codeyarch456@gmail.com?subject=${subject}&body=${message}`
    }

    return (
        <section id="contact">
            <div className="contact-form-container">
                <form onSubmit={redirectMailto}>
                    <h1 className="base-header" style={{textAlign: "center"}}>Contact Me</h1>
                    <textarea
                        name="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        style={{fontFamily: "inherit"}}
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{fontFamily: "inherit"}}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;