import React from 'react';
import '../styles/pointsBox.css';
import { FaExchangeAlt, FaCreditCard, FaTruck } from 'react-icons/fa'; 


const PointsBox = () => {
    return (
        <div className='pointsContainer'>
            <div>
            <FaTruck size={35}/>
                <h2>ENTREGA ÁGIL E RETIRADA FLEXÍVEL</h2>
                <p>Logística rápida e opções de retirada facilitadas em nossos pontos de atendimento.</p>
            </div>
            <div>
                <FaExchangeAlt size={35}/>
                <h2>SUPORTE PÓS-VENDA IMEDIATO</h2>
                <p>Atendimento especializado no pós-venda e garantia com <strong> troca expressa </strong></p>
            </div>
            <div>
                <FaCreditCard size={35}/>
                <h2>CONDIÇÕES DE PAGAMENTO ESPECIAIS</h2>
                <p>Facilidade no pagamento, com condições exclusivas de preços para revenda</p>
            </div>
        </div>
    );
};

export default PointsBox;