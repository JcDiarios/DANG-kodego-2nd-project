import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ParisHOImage from "../games/gameimg/parishiddenobjects300200.webp"; // Include the appropriate file extension

const ParisHO = () => {
  return (
    <GamePreview
      imageUrl={ParisHOImage}
      gameUrl="https://cdn.htmlgames.com/ParisHiddenObjects/"
    />
  );
};

export default ParisHO;