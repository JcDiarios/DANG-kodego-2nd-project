import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import WildWestMahjongImage from "../games/gameimg/wildwestmahjong300200.webp"; // Include the appropriate file extension

const WildWestMahjong = () => {
  return (
    <GamePreview
      imageUrl={WildWestMahjongImage}
      gameUrl="https://cdn.htmlgames.com/WildWestMahjong/"
    />
  );
};

export default WildWestMahjong;