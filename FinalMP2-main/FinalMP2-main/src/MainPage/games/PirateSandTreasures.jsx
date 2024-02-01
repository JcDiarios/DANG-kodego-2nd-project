import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import PirateSandTreasuresImage from "../games/gameimg/piratesandtreasures300200.webp"; // Include the appropriate file extension

const PirateSandTreasures = () => {
  return (
    <GamePreview
      imageUrl={PirateSandTreasuresImage}
      gameUrl="https://cdn.htmlgames.com/PiratesAndTreasures/"
    />
  );
};

export default PirateSandTreasures;