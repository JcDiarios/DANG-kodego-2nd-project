import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BeeEnglishImage from "../games/gameimg/beeenglish300200.webp"; // Include the appropriate file extension

const BeeEnglish = () => {
  return (
    <GamePreview
      imageUrl={BeeEnglishImage}
      gameUrl="https://cdn.htmlgames.com/BeeEnglish/"
    />
  );
};

export default BeeEnglish;