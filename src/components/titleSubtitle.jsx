import React from 'react';

const TitleSubtitle = (props) => {
    return (
        <div className='containerTitle'>
            <h2 className='sectionTitle'>{props.title}</h2>
            <p className='sectionSubtitle'>{props.subtitle}</p>
        </div>
    );
};

export default TitleSubtitle;