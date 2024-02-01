import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import EasterMergeImage from "../games/gameimg/eastermerge300200.webp"; // Include the appropriate file extension

const EasterMerge = () => {
  return (
    <GamePreview
      imageUrl={EasterMergeImage}
      gameUrl="https://cdn.htmlgames.com/EasterMerge/"
    />
  );
};

export default EasterMerge;