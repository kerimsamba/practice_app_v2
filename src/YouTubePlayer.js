import React from 'react';
import './components.css';

const YouTubePlayer = ({ youtubeLink }) => {
  const youtubeAddress = 'https://www.youtube.com/embed/' + youtubeLink.slice(32);

  if (youtubeLink.length > 15) {
    return (
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={youtubeAddress}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        ></iframe>
      </div>
    );
  }

  return null;
};

export default YouTubePlayer;
