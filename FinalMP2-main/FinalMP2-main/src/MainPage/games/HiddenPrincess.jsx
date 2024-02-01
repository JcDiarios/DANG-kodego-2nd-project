import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import HiddenPrincessImage from "../games/gameimg/hiddenprincess300200.webp"; // Include the appropriate file extension

const HiddenPrincess = () => {
  return (
    <GamePreview
      imageUrl={HiddenPrincessImage}
      gameUrl="https://cdn.htmlgames.com/HiddenPrincess/"
    />
  );
};

export default HiddenPrincess;