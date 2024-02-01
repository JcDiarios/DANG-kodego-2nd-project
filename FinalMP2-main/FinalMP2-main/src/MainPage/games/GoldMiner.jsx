import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import GoldMinerImage from "../games/gameimg/goldminer300200.webp"; // Include the appropriate file extension

const GoldMiner = () => {
  return (
    <GamePreview
      imageUrl={GoldMinerImage}
      gameUrl="https://cdn.htmlgames.com/GoldMiner/"
    />
  );
};

export default GoldMiner;