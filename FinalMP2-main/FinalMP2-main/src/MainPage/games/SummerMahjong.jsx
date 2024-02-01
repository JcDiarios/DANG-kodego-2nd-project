import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SummerMahjongImage from "../games/gameimg/summermahjong300200.webp"; // Include the appropriate file extension

const SummerMahjong = () => {
  return (
    <GamePreview
      imageUrl={SummerMahjongImage}
      gameUrl="https://cdn.htmlgames.com/SummerMahjong/"
    />
  );
};

export default SummerMahjong;