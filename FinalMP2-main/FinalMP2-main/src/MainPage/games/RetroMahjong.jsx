import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import RetroMahjongImage from "../games/gameimg/retromahjong300200.webp"; // Include the appropriate file extension

const RetroMahjong = () => {
  return (
    <GamePreview
      imageUrl={RetroMahjongImage}
      gameUrl="https://cdn.htmlgames.com/RetroMahjong/"
    />
  );
};

export default RetroMahjong;