import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ValentineLinkImage from "../games/gameimg/valentinelink300200.webp"; // Include the appropriate file extension

const ValentineLink = () => {
  return (
    <GamePreview
      imageUrl={ValentineLinkImage}
      gameUrl="https://cdn.htmlgames.com/ValentineLink/"
    />
  );
};

export default ValentineLink;