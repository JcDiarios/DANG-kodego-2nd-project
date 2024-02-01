import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import WaterFallHiddenStarsImage from "../games/gameimg/waterfallhiddenstars300200.webp"; // Include the appropriate file extension

const WaterFallHiddenStars = () => {
  return (
    <GamePreview
      imageUrl={WaterFallHiddenStarsImage}
      gameUrl="https://cdn.htmlgames.com/WaterfallHiddenStars/"
    />
  );
};

export default WaterFallHiddenStars;