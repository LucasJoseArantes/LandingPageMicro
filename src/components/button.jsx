import React from 'react';

const Button = (props) => {

    const handleClick = () => {
        if (!props.nextSection) {
            return;
        }
        const section = document.querySelector(props.nextSection);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <button className='button' onClick={handleClick}>
            {props.text}
        </button>
    );
}

export default Button;