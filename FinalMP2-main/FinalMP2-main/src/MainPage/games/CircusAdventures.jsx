import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CircusAdventuresImage from "../games/gameimg/circusadventures300200.webp"; // Include the appropriate file extension

const CircusAdventures = () => {
  return (
    <GamePreview
      imageUrl={CircusAdventuresImage}
      gameUrl="https://cdn.htmlgames.com/CircusAdventures/"
    />
  );
};

export default CircusAdventures;