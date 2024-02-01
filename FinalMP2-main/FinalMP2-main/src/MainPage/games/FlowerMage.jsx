import React from 'react';
import GamePreview from '../MainComponent/gamePreview';
import FlowerMageImage from '../games/gameimg/flowermerge300200.webp'; // 

const FlowerMage = () => {
  return (
    <GamePreview
      name="Flower Mage"
      imageUrl={FlowerMageImage}
      gameUrl="https://cdn.htmlgames.com/FlowerMerge/"
    />
  );
};

export default FlowerMage;
