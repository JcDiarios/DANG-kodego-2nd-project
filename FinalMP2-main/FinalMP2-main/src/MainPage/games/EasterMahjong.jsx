import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import EasterMahjongImage from "../games/gameimg/eastermahjong300200.webp"; // Include the appropriate file extension

const EasterMahjong = () => {
  return (
    <GamePreview
      imageUrl={EasterMahjongImage}
      gameUrl="https://cdn.htmlgames.com/EasterMahjongg/"
    />
  );
};

export default EasterMahjong;