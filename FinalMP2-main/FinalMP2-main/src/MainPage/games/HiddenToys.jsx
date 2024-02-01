import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import HiddenToysImage from "../games/gameimg/hiddentoys300200.webp"; // Include the appropriate file extension

const HiddenToys = () => {
  return (
    <GamePreview
      imageUrl={HiddenToysImage}
      gameUrl="https://cdn.htmlgames.com/HiddenToys/"
    />
  );
};

export default HiddenToys;