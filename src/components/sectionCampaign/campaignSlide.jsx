import React from 'react';
import '../../styles/sectionCampaign.css';
import Button from '../button';

const CampaignSlide = ({ imgPath, title, firstDescription, secondDescription, link }) => (
    <div className="sectionCampaign__content">
        <div className="sectionCampaign__video">
            {console.log(imgPath)}
            <img src={imgPath} alt={title} />
        </div>
        <div className="sectionCampaign__text">
            <h2 className='sectionTitle'>{title}</h2>
            <p>{firstDescription}</p>
            <p>{secondDescription}</p>
            <div className="sectionCampaign__button">
            <Button text="Estou Interessado" link={link} />
        </div>
        </div>
    </div>
);

export default CampaignSlide;
