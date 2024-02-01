import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BlockMonsterExtreme1010Image from "../games/gameimg/blockmonsters1010extreme300200.webp"; // Include the appropriate file extension

const BlockMonsterExtreme1010 = () => {
  return (
    <GamePreview
      imageUrl={BlockMonsterExtreme1010Image}
      gameUrl="https://cdn.htmlgames.com/BlockMonsters1010Extreme/"
    />
  );
};

export default BlockMonsterExtreme1010;