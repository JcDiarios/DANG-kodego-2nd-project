import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import FarmMahjongImage from "../games/gameimg/farmmahjongg300200.webp"; // Include the appropriate file extension

const FarmMahjong = () => {
  return (
    <GamePreview
      imageUrl={FarmMahjongImage}
      gameUrl="https://cdn.htmlgames.com/FarmMahjong/"
    />
  );
};

export default FarmMahjong;