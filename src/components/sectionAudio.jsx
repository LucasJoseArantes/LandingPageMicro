import React from 'react';
import TitleSubtitle from './titleSubtitle';
import '../styles/sectionAudio.css';
import Button from './button';
import AudioBox from './audioBox';

const SectionAudio = () => {
    return (
        <section className='sectionImage sectionAudio'>
            <TitleSubtitle title="Especialidades" subtitle="Confira algum de nossos trabalhos mais recentes" />
            <AudioBox />
            <Button text="Estou Interessado" nextSection=".sectionUs"/>
        </section>
    );
};

export default SectionAudio;