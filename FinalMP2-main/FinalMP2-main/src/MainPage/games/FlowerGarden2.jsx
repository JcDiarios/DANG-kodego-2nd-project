import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import FlowerGarden2Image from "../games/gameimg/flowergarden2300200.webp"; // Include the appropriate file extension

const FlowerGarden2 = () => {
  return (
    <GamePreview
      imageUrl={FlowerGarden2Image}
      gameUrl="https://cdn.htmlgames.com/FlowerGarden2/"
    />
  );
};

export default FlowerGarden2;