import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BlitzWizardImage from "../games/gameimg/blitzwizards300.webp"; // Include the appropriate file extension

const BlitzWizard = () => {
  return (
    <GamePreview
      imageUrl={BlitzWizardImage}
      gameUrl="https://cdn.htmlgames.com/BlitzWizards/"
    />
  );
};

export default BlitzWizard;