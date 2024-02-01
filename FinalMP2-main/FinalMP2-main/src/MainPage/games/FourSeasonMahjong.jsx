import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import FourSeasonMahjongImage from "../games/gameimg/fourseasonsmahjong300200.webp"; // Include the appropriate file extension

const FourSeasonMahjong = () => {
  return (
    <GamePreview
      imageUrl={FourSeasonMahjongImage}
      gameUrl="https://cdn.htmlgames.com/FourSeasonsMahjong/"
    />
  );
};

export default FourSeasonMahjong;