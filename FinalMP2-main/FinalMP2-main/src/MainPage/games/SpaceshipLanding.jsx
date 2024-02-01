import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SpaceshipLandingImage from "../games/gameimg/spaceshiplanding300200.webp"; // Include the appropriate file extension

const SpaceshipLanding = () => {
  return (
    <GamePreview
      imageUrl={SpaceshipLandingImage}
      gameUrl="https://cdn.htmlgames.com/SpaceshipLanding/"
    />
  );
};

export default SpaceshipLanding;