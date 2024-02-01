import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SushiMahjongImage from "../games/gameimg/sushimahjong300200.webp"; // Include the appropriate file extension

const SushiMahjong = () => {
  return (
    <GamePreview
      imageUrl={SushiMahjongImage}
      gameUrl="https://cdn.htmlgames.com/SushiMahjong/"
    />
  );
};

export default SushiMahjong;