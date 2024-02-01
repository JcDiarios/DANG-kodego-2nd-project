import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MahjongTowerImage from "../games/gameimg/mahjongtower300200.webp"; // Include the appropriate file extension

const MahjongTower = () => {
  return (
    <GamePreview
      imageUrl={MahjongTowerImage}
      gameUrl="https://cdn.htmlgames.com/MahjongTower/"
    />
  );
};

export default MahjongTower;