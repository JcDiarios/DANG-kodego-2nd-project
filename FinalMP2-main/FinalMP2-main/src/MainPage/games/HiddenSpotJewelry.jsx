import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import HiddenSpotJewelryImage from "../games/gameimg/hiddenspots-jewelry300200.webp"; // Include the appropriate file extension

const HiddenSpotJewelry = () => {
  return (
    <GamePreview
      imageUrl={HiddenSpotJewelryImage}
      gameUrl="https://cdn.htmlgames.com/HiddenSpotsJewelry/"
    />
  );
};

export default HiddenSpotJewelry;