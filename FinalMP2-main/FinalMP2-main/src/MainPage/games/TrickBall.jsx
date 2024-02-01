import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TrickBallImage from "../games/gameimg/trickball300200.webp"; // Include the appropriate file extension

const TrickBall = () => {
  return (
    <GamePreview
      imageUrl={TrickBallImage}
      gameUrl="https://cdn.htmlgames.com/TrickBall/"
    />
  );
};

export default TrickBall;