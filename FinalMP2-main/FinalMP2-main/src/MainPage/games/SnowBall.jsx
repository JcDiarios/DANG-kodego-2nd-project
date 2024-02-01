import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SnowBallImage from "../games/gameimg/snowballs300200.webp"; // Include the appropriate file extension

const SnowBall = () => {
  return (
    <GamePreview
      imageUrl={SnowBallImage}
      gameUrl="https://cdn.htmlgames.com/SnowBalls/"
    />
  );
};

export default SnowBall;