import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SimonSaysImage from "../games/gameimg/simonsays300200.webp"; // Include the appropriate file extension

const SimonSays = () => {
  return (
    <GamePreview
      imageUrl={SimonSaysImage}
      gameUrl="https://cdn.htmlgames.com/SimonSays/"
    />
  );
};

export default SimonSays;