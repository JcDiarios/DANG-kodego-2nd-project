import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import RoyalTowerMahjongImage from "../games/gameimg/royaltowermahjong300200.webp"; // Include the appropriate file extension

const RoyalTowerMahjong = () => {
  return (
    <GamePreview
      imageUrl={RoyalTowerMahjongImage}
      gameUrl="https://cdn.htmlgames.com/RoyalTowerMahjong/"
    />
  );
};

export default RoyalTowerMahjong;