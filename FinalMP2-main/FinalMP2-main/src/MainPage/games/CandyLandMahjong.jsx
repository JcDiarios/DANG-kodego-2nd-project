import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CandyLandMahjongImage from "../games/gameimg/candylandmahjong300200.webp"; // Include the appropriate file extension

const CandyLandMahjong = () => {
  return (
    <GamePreview
      imageUrl={CandyLandMahjongImage}
      gameUrl="https://cdn.htmlgames.com/CandylandMahjong/"
    />
  );
};

export default CandyLandMahjong;