import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import KidsMahjongImage from "../games/gameimg/kidsmahjong300200.webp"; // Include the appropriate file extension

const KidsMahjong = () => {
  return (
    <GamePreview
      imageUrl={KidsMahjongImage}
      gameUrl="https://cdn.htmlgames.com/KidsMahjong/"
    />
  );
};

export default KidsMahjong;