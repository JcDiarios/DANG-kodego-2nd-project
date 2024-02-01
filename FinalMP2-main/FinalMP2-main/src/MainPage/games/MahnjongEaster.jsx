import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MahjongEasterImage from "../games/gameimg/mahjongblockseaster300200.webp"; // Include the appropriate file extension

const MahjongEaster = () => {
  return (
    <GamePreview
      imageUrl={MahjongEasterImage}
      gameUrl="https://cdn.htmlgames.com/MahjongBlocksEaster/"
    />
  );
};

export default MahjongEaster;