import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MahjongColorsImage from "../games/gameimg/mahjongcolors300200.webp"; // Include the appropriate file extension

const MahjongColors = () => {
  return (
    <GamePreview
      imageUrl={MahjongColorsImage}
      gameUrl="https://cdn.htmlgames.com/MahjongColors/"
    />
  );
};

export default MahjongColors;