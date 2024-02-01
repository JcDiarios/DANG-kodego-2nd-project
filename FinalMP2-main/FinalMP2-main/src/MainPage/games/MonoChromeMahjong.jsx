import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MonoChromeMahjongImage from "../games/gameimg/monochromemahjongg300200.webp"; // Include the appropriate file extension

const MonoChromeMahjong = () => {
  return (
    <GamePreview
      imageUrl={MonoChromeMahjongImage}
      gameUrl="https://cdn.htmlgames.com/MonochromeMahjongg/"
    />
  );
};

export default MonoChromeMahjong;