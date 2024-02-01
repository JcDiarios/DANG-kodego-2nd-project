import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import HiddenForestImage from "../games/gameimg/hiddenforest300200.webp"; // Include the appropriate file extension

const HiddenForest = () => {
  return (
    <GamePreview
      imageUrl={HiddenForestImage}
      gameUrl="https://cdn.htmlgames.com/HiddenForest/"
    />
  );
};

export default HiddenForest;