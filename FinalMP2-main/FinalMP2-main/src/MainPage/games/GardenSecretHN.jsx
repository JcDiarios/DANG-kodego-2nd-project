import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import GardenSecretHNImage from "../games/gameimg/gardensecretshiddennumbers300200.webp"; // Include the appropriate file extension

const GardenSecretHN = () => {
  return (
    <GamePreview
      imageUrl={GardenSecretHNImage}
      gameUrl="https://cdn.htmlgames.com/GardenSecretsHiddenNumbers/"
    />
  );
};

export default GardenSecretHN;