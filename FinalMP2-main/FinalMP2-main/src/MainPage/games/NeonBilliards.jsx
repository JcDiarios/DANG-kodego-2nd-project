import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import NeonBilliardsImage from "../games/gameimg/neonbilliards300200.webp"; // Include the appropriate file extension

const NeonBilliards = () => {
  return (
    <GamePreview
      imageUrl={NeonBilliardsImage}
      gameUrl="https://cdn.htmlgames.com/NeonBilliards/"
    />
  );
};

export default NeonBilliards;