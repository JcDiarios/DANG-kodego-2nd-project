import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import NeonNibbletImage from "../games/gameimg/neonnibblet300.webp"; // Include the appropriate file extension

const NeonNibblet = () => {
  return (
    <GamePreview
      imageUrl={NeonNibbletImage}
      gameUrl="https://cdn.htmlgames.com/NeonNibblet/"
    />
  );
};

export default NeonNibblet;