import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import GardenSecretHOTImage from "../games/gameimg/gardensecretshiddenobjectstext300200.webp"; // Include the appropriate file extension

const GardenSecretHOT = () => {
  return (
    <GamePreview
      imageUrl={GardenSecretHOTImage}
      gameUrl="https://cdn.htmlgames.com/GardenSecretsHiddenObjectsText/"
    />
  );
};

export default GardenSecretHOT;