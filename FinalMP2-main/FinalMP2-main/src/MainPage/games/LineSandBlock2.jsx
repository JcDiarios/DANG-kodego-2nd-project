import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import LineSandBlockImage from "../games/gameimg/linesandblocks2300200.webp"; // Include the appropriate file extension

const LineSandBlock2 = () => {
  return (
    <GamePreview
      imageUrl={LineSandBlockImage}
      gameUrl="https://cdn.htmlgames.com/LinesAndBlocks2/"
    />
  );
};

export default LineSandBlock2;