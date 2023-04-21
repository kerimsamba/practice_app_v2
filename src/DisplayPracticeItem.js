import React from 'react';
import YouTubePlayer from './YouTubePlayer';
import './components.css';

const YouTubePlayer = () => {
  return <div>YouTubePlayer Component</div>;
};

const DrumMachine = () => {
  return <div>DrumMachine Component</div>;
};

const BackingTrack = () => {
  return <div>BackingTrack Component</div>;
};

const DisplayPracticeItem = ({ practice_item }) => {
  return (
    <div className="display-item-container">
      <h2>Title: {practice_item.title || "Placeholder"}</h2>
      <p>Description: {practice_item.description || "Placeholder"}</p>
      <p>BPM: {practice_item.bpm || "Placeholder"}</p>
      <p>Category: {practice_item.category || "Placeholder"}</p>
      <p>History: {practice_item.history || "Placeholder"}</p>
      <p>Date Added: {practice_item.dateAdded || "Placeholder"}</p>
      <p>Date Amended: {practice_item.dateAmended || "Placeholder"}</p>
      <YouTubePlayer youtubeLink={practice_item.youtubeLink} />
      <DrumMachine />
      <BackingTrack />
    </div>
  );
};

export default DisplayPracticeItem;
