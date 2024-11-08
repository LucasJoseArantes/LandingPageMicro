import React from 'react';
import './styles/app.css';
import Footer from './components/footer';
import Header from './components/header';
import SectionOne from './components/sectionOne';
import PointsBox from './components/pointsBox';
import SectionCampaign from './components/sectionCampaign/sectionCampaign';
import SectionFAQ from './components/sectionFAQ';
import SectionContact from './components/sectionContact';
import SectionCustomer from './components/sectionCustomer';
import SectionUs from './components/sectionUs';
import Whatsapp from './components/whatsAppIcon';
import ToTopBtn from './components/toTopBtn';


function App() {
    return (
        <div className='mainContainer'>
                <Header />
                <SectionOne />    
                <PointsBox />
                <SectionCampaign />
            <div className='image-container imageCostumer'>
                <SectionCustomer />
            </div>
                <SectionFAQ />
            <div className='image-container imageContact'>
                <SectionContact />
            </div>
            <Whatsapp />
            <ToTopBtn />
            <Footer />
        </div>
    );
}

export default App;
