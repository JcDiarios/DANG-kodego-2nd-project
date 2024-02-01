import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import NeonArkanoidImage from "../games/gameimg/neonarkanoid300200.webp"; // Include the appropriate file extension

const NeonArkanoid = () => {
  return (
    <GamePreview
      imageUrl={NeonArkanoidImage}
      gameUrl="https://cdn.htmlgames.com/NeonArkanoid/"
    />
  );
};

export default NeonArkanoid;