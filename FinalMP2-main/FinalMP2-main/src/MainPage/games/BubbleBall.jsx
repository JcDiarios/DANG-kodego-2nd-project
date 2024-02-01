import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BubbleBallImage from "../games/gameimg/bubbleball300200.webp"; // Include the appropriate file extension

const BubbleBall = () => {
  return (
    <GamePreview
      imageUrl={BubbleBallImage}
      gameUrl="https://cdn.htmlgames.com/BubbleBall/"
    />
  );
};

export default BubbleBall;