import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SpotTheUfoImage from "../games/gameimg/spottheufo300.webp"; // Include the appropriate file extension

const SpotTheUfo = () => {
  return (
    <GamePreview
      imageUrl={SpotTheUfoImage}
      gameUrl="https://cdn.htmlgames.com/SpotTheUFO/"
    />
  );
};

export default SpotTheUfo;