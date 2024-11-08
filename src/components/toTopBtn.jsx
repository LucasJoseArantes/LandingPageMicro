import React, { useState, useEffect } from 'react';

const ToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300 && window.innerWidth < 1000) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="to-top-btn">
            {isVisible && 
                <button onClick={scrollToTop} style={styles.button}>
                    ↑
                </button>
            }
        </div>
    );
};

const styles = {
    button: {
        position: 'fixed',
        bottom: '30px',
        left: '10px',
        padding: '5px',
        fontSize: '1rem',
        backgroundColor: 'rgba(110, 15, 105, 0.802);',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 1000,
    }
};

export default ToTopBtn;