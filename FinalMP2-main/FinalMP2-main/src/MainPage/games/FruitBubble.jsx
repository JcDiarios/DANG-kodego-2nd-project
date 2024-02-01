import React from 'react';
import GamePreview from '../MainComponent/gamePreview';
import FruitBubbleImage from '../games/gameimg/fruitbubble300200.webp';

const FruitBubble = () => {
  return (
    <GamePreview
      name="Fruit Bubble"
      imageUrl={FruitBubbleImage}
      gameUrl="https://cdn.htmlgames.com/FruitBubble/"
    />
  );
};

export default FruitBubble;
