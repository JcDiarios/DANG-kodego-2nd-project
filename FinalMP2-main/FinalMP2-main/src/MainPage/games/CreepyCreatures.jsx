import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CreepyCreaturesImage from "../games/gameimg/creepycreatures300200.webp"; // Include the appropriate file extension

const CreepyCreatures = () => {
  return (
    <GamePreview
      imageUrl={CreepyCreaturesImage}
      gameUrl="https://cdn.htmlgames.com/CreepyCreatures/"
    />
  );
};

export default CreepyCreatures;