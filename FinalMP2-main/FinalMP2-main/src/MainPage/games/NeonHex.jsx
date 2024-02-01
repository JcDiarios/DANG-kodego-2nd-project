import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import NeonHexImage from "../games/gameimg/neonhex300200.webp"; // Include the appropriate file extension

const NeonHex = () => {
  return (
    <GamePreview
      imageUrl={NeonHexImage}
      gameUrl="https://cdn.htmlgames.com/NeonHex/"
    />
  );
};

export default NeonHex;