import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/sectionContact.css';

const SectionContact = () => {
    const [formState, setFormState] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_agozd7d', // Substitua pelo seu Service ID
            'template_a92fu6q', // Substitua pelo seu Template ID
            formState,
            'jSaoNqbRw7O1Gz-78' // Substitua pelo seu User ID
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email enviado com sucesso!');
        })
        .catch((err) => {
            console.log('FAILED...', err);
            alert('Falha ao enviar o email. Tente novamente.');
        });
    };

    return (
        <section className="sectionContact" id="contact">
            <div className='contactContent'>
                <div className='contactTitle'>
                    <h2 className='sectionTitle'>Fale Conosco</h2>
                    <p className='sectionSubtitle'>Agora nós queremos ouvir a sua voz. Deixe sua mensagem e entraremos em contato!</p>
                </div>
                
                <form className='contactForm' onSubmit={sendEmail}>
                    <div className="formGroup">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Preencha com seu nome"
                            value={formState.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="phone">Telefone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="(yy) xxxxx-xxxx"
                            value={formState.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="exemplo@gmail.com"
                            value={formState.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                            className='messageForm'
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Você tem alguma dúvida? Quer saber um pouco mais sobre nós?"
                            value={formState.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit" className='button' >Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default SectionContact;
