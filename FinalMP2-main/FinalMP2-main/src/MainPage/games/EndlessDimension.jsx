import React from 'react';
import GamePreview from '../MainComponent/gamePreview';
import EndlessDimensionImage from '../games/gameimg/endless-dimensions-300.webp'; // 

const EndlessDimension = () => {
  return (
    <GamePreview
      name="EndlessDimension"
      imageUrl={EndlessDimensionImage}
      gameUrl="https://cdn.htmlgames.com/EndlessDimensions/"
    />
  );
};

export default EndlessDimension;
