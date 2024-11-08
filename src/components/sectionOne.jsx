import React from 'react';
import Button from './button';
import '../styles/sectionOne.css';

const SectionOne = () => {
    return (
        <section className='sectionImage sectionOne'>
            <div className='mainTitle'>
                <h1>Sua oportunidade de oferecer mais segurança e qualidade está aqui. Seja parceiro!</h1>
            </div>
            <div className='pointsContainer'>
                <div>
                    <h2>ENTREGA ÁGIL E RETIRADA FLEXÍVEL</h2>
                        <p>Logística rápida e opções de retirada facilitadas em nossos pontos de atendimento.</p>
                </div>
                <div>
                    <h2>SUPORTE PÓS-VENDA IMEDIATO
                    </h2>
                        <p>Atendimento especializado e garantia com troca expressa</p>
                </div>
                <div>
                    <h2>CONDIÇÕES DE PAGAMENTO ESPECIAIS</h2>
                        <p>Facilidade no pagamento, com condições exclusivas para revendedores e consumidores finais.</p>
                </div>
                
            </div>
        </section>
    );
};

export default SectionOne;