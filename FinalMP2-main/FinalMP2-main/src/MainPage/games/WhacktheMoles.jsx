import React from 'react';
import WhacktheMolesImage from "../games/gameimg/whackthemoles300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const WhacktheMoles = () => {
  return (
    <GamePreview
      imageUrl={WhacktheMolesImage}
      gameUrl="https://cdn.htmlgames.com/WhackTheMoles/"
    />
  );
};

export default WhacktheMoles;