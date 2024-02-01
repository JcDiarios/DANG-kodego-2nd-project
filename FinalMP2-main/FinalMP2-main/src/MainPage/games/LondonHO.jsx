import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import LondonHOImage from "../games/gameimg/londonhiddenobjects300200.webp"; // Include the appropriate file extension

const LondonHO = () => {
  return (
    <GamePreview
      imageUrl={LondonHOImage}
      gameUrl="https://cdn.htmlgames.com/LondonHiddenObjects/"
    />
  );
};

export default LondonHO;