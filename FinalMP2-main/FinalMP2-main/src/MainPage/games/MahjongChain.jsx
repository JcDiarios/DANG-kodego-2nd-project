import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MahjongChainImage from "../games/gameimg/mahjongchain300200.webp"; // Include the appropriate file extension

const MahjongChain = () => {
  return (
    <GamePreview
      imageUrl={MahjongChainImage}
      gameUrl="https://cdn.htmlgames.com/MahjongChain/"
    />
  );
};

export default MahjongChain;