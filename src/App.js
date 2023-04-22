import React from "react";
import "./style.css";
import DisplayPracticeItem from "./DisplayPracticeItem";

const FetchPracticeItem = () => {
  const handleClick = () => {
    // Fetch practice item logic here
  };

  return (
    <button className="square-button fetch-button" onClick={handleClick}>
      Fetch Practice Item
    </button>
  );
};

const AddPracticeItem = () => {
  const handleClick = () => {
    // Add practice item logic here
  };

  return (
    <button className="square-button add-button" onClick={handleClick}>
      Add Practice Item
    </button>
  );
};

const EditAll = () => {
  const handleClick = () => {
    // Edit all items logic here
  };

  return (
    <button onClick={handleClick}>Edit All</button>
  );
};

export default function App() {
  // Sample practice_item object to pass as prop
  const practice_item = {
    title: "Sample Title",
    description: "Sample Description",
    bpm: 120,
    category: "Sample Category",
    history: "Sample History",
    dateAdded: "2023-04-21",
    dateAmended: "2023-04-22",
    youtubeLink: "https://www.youtube.com/watch?v=Zfr3L0drhS8",
  };


return (
  <div className="container">
    <header className="header">
      <h1>Music Practice App</h1>
      <EditAll />
    </header>
    <DisplayPracticeItem practice_item={practice_item} />
    <div className="bottom-button-container">
      <AddPracticeItem />
      <FetchPracticeItem />
    </div>
  </div>
);
}


