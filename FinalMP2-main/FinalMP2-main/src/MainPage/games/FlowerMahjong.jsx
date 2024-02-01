import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import FlowerMahjongImage from "../games/gameimg/flowerslidemahjong300200.webp"; // Include the appropriate file extension

const FlowerMahjong = () => {
  return (
    <GamePreview
      imageUrl={FlowerMahjongImage}
      gameUrl="https://cdn.htmlgames.com/FlowerSlideMahjong/"
    />
  );
};

export default FlowerMahjong;