import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MahjongCollapseImage from "../games/gameimg/mahjongcollapse300200.webp"; // Include the appropriate file extension

const MahjongCollapse = () => {
  return (
    <GamePreview
      imageUrl={MahjongCollapseImage}
      gameUrl="https://cdn.htmlgames.com/MahjongCollapse/"
    />
  );
};

export default MahjongCollapse;