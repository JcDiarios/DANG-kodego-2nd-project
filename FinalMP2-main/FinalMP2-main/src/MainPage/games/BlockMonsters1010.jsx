import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BlockMonsters1010Image from "../games/gameimg/blockmonsters1010300200.webp"; // Include the appropriate file extension

const BlockMonsters1010 = () => {
  return (
    <GamePreview
      imageUrl={BlockMonsters1010Image}
      gameUrl="https://cdn.htmlgames.com/BlockMonsters1010/"
    />
  );
};

export default BlockMonsters1010;