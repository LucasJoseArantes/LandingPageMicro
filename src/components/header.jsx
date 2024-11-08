import React, { useState } from 'react';
import '../styles/header.css';
import whiteLogo from  '../assets/images/logos/whiteLogo.png';

const Header = () => {
    return (
        <header>
            <div className='logo-container'>
                <img src={whiteLogo} alt='MicroSeg Distribuidora' />
            </div>
            
        </header>
    );
};

export default Header;
