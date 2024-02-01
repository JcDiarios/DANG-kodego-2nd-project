import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SpaceCubesImage from "../games/gameimg/spacecubes300200.webp"; // Include the appropriate file extension

const SpaceCubes = () => {
  return (
    <GamePreview
      imageUrl={SpaceCubesImage}
      gameUrl="https://cdn.htmlgames.com/SpaceCubes/"
    />
  );
};

export default SpaceCubes;