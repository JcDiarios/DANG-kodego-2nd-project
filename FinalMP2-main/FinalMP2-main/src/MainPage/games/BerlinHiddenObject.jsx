import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BerlinHiddenObjectImage from "../games/gameimg/berlinhiddenobjects300200.webp"; // Include the appropriate file extension

const BerlinHiddenObject = () => {
  return (
    <GamePreview
      imageUrl={BerlinHiddenObjectImage}
      gameUrl="https://cdn.htmlgames.com/BerlinHiddenObjects/"
    />
  );
};

export default BerlinHiddenObject;