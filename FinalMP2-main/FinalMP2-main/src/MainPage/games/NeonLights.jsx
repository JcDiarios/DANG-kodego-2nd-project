import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import NeonLightsImage from "../games/gameimg/neonlights300200.webp"; // Include the appropriate file extension

const NeonLights = () => {
  return (
    <GamePreview
      imageUrl={NeonLightsImage}
      gameUrl="https://cdn.htmlgames.com/NeonLights/"
    />
  );
};

export default NeonLights;