import React, { useState } from 'react';
import '../styles/sectionFAQ.css';
import TitleSubtitle from './titleSubtitle';
import faqs from '../jsons/faqs.json';

const SectionFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className="faqSection" id="faqSection">
            <TitleSubtitle title="Perguntas Frequentes" subtitle="Respostas para as dúvidas mais comuns sobre nossos serviços"/>
            <div className="faqList">
                {faqs.map((faq, index) => (
                    <div key={index} className="faqItem">
                        <div 
                            className="faqQuestion" 
                            onClick={() => toggleAnswer(index)}
                        >
                            <span>{index + 1}. {faq.question}</span>
                            <span className={`faqIcon ${activeIndex === index ? 'open' : ''}`}>
                                {activeIndex === index ? '▲' : '▼'}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="faqAnswer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionFAQ;
