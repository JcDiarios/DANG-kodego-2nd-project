import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DigDigImage from "../games/gameimg/digdig300200.webp"; // Include the appropriate file extension

const DigDig = () => {
  return (
    <GamePreview
      imageUrl={DigDigImage}
      gameUrl="https://cdn.htmlgames.com/DigDig/"
    />
  );
};

export default DigDig;