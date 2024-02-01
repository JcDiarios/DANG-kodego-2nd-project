import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import FlowerGardenImage from "../games/gameimg/flowergarden300200.webp"; // Include the appropriate file extension

const FlowerGarden = () => {
  return (
    <GamePreview
      imageUrl={FlowerGardenImage}
      gameUrl="https://cdn.htmlgames.com/FlowerGarden/"
    />
  );
};

export default FlowerGarden;