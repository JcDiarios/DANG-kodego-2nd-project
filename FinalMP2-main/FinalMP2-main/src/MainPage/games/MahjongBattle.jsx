import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MahjongBattleImage from "../games/gameimg/mahjongbattle300.webp"; // Include the appropriate file extension

const MahjongBattle = () => {
  return (
    <GamePreview
      imageUrl={MahjongBattleImage}
      gameUrl="https://cdn.htmlgames.com/MahjongBattle/"
    />
  );
};

export default MahjongBattle;