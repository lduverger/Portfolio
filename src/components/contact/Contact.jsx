import { useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_f27zyz4';
        const templateId = 'template_yqq2t26';
        const publicKey = 'W3ND6d1QX1GS0H5UM';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Loïc',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
                alert("Envoi effectué !");
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert("Erreur lors de l'envoi");
            });
    }


    return (
        <section id='contact' className='section-contact'>
            <h2>Contact</h2>
            <form className='form-contact' onSubmit={handleSubmit}>
                <label htmlFor='user_name'>Name</label>
                <input type="text" placeholder='Votre nom' name="user_name" value={name} onChange={(e) => setName(e.target.value)} required/>
                <label htmlFor='user_email'>Email</label>
                <input type="email" placeholder='Votre adresse mail' name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <label htmlFor='message'>Message</label>
                <textarea name="message" placeholder='Votre message' value={message} onChange={(e) => setMessage(e.target.value)} required/>
                <div className='form-contact_button-container'>
                    <input className='form-contact_button' type="submit" value="Envoyer" />
                </div>
            </form>
        </section>
    );
};

export default Contact;