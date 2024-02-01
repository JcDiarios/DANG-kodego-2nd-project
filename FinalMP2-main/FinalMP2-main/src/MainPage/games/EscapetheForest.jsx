import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import EscapetheForestImage from "../games/gameimg/escapetheforest300200.webp"; // Include the appropriate file extension

const EscapetheForest = () => {
  return (
    <GamePreview
      imageUrl={EscapetheForestImage}
      gameUrl="https://cdn.htmlgames.com/EscapeTheForest/"
    />
  );
};

export default EscapetheForest;