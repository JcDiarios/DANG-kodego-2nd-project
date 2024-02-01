import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ForestMahjongImage from "../games/gameimg/forestmahjong300200.webp"; // Include the appropriate file extension

const ForestMahjong = () => {
  return (
    <GamePreview
      imageUrl={ForestMahjongImage}
      gameUrl="https://cdn.htmlgames.com/ForestMahjong/"
    />
  );
};

export default ForestMahjong;