import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import PinBallImage from "../games/gameimg/pinball300200.webp"; // Include the appropriate file extension

const PinBall = () => {
  return (
    <GamePreview
      imageUrl={PinBallImage}
      gameUrl="https://cdn.htmlgames.com/Pinball/"
    />
  );
};

export default PinBall;