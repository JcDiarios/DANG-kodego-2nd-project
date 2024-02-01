import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ExtremeVexedImage from "../games/gameimg/extremevexed300.webp"; // Include the appropriate file extension

const ExtremeVexed = () => {
  return (
    <GamePreview
      imageUrl={ExtremeVexedImage}
      gameUrl="https://cdn.htmlgames.com/ExtremeVexed/"
    />
  );
};

export default ExtremeVexed;