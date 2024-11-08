import React from 'react';

const Button = (props) => {

    const handleClick = () => {
        if (props.link) {
            window.open(props.link, '_blank');
    };
        
    };

    return (
        <button className='button' onClick={handleClick}>
            {props.text}
        </button>
    );
}

export default Button;