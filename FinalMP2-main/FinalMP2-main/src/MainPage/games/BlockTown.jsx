import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BlockTownImage from "../games/gameimg/tetristown300200.webp"; // Include the appropriate file extension

const BlockTown = () => {
  return (
    <GamePreview
      imageUrl={BlockTownImage}
      gameUrl="https://cdn.htmlgames.com/BlockTown/"
    />
  );
};

export default BlockTown;