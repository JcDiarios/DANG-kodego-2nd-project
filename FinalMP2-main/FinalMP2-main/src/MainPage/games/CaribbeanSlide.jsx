import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CaribbeanSlideImage from "../games/gameimg/caribbeanslide300200.webp"; // Include the appropriate file extension

const CaribbeanSlide = () => {
  return (
    <GamePreview
      imageUrl={CaribbeanSlideImage}
      gameUrl="https://cdn.htmlgames.com/CaribbeanSlide/"
    />
  );
};

export default CaribbeanSlide;