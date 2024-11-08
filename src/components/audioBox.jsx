import React, { useState } from 'react';
import { FaPlay, FaDownload } from 'react-icons/fa';
import ReactPlayer from 'react-player';

const AudioBox = () => {
    const [currentAudioUrl, setCurrentAudioUrl] = useState("");

    const handlePlay = (url) => {
        setCurrentAudioUrl(url);
    };

    return (
        <div className="audioBox">
            <ReactPlayer
                url={currentAudioUrl}
                playing={currentAudioUrl !== ""}
                controls={true} 
            />
            {audioData.map((audio, index) => (
                <div key={index} className="audioItem">
                    <button onClick={() => handlePlay(audio.url)}>
                        <FaPlay size={20} color="white" />
                    </button>
                    <h3>{audio.name}</h3>
                    <a href={audio.url} download>
                        <FaDownload size={20} color="white" />
                    </a>
                </div>
                
            ))}
        </div>
    );
};

export default AudioBox;
