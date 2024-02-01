import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ChinaMahjongImage from "../games/gameimg/mahjonggchina300200.webp"; // Include the appropriate file extension

const ChinaMahjong = () => {
  return (
    <GamePreview
      imageUrl={ChinaMahjongImage}
      gameUrl="https://cdn.htmlgames.com/MahjonggChina/"
    />
  );
};

export default ChinaMahjong;