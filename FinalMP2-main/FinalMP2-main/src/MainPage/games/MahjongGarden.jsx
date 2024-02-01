import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MahjongGardenImage from "../games/gameimg/mahjonggardens300200.webp"; // Include the appropriate file extension

const MahjongGarden = () => {
  return (
    <GamePreview
      imageUrl={MahjongGardenImage}
      gameUrl="https://cdn.htmlgames.com/MahjongGardens/"
    />
  );
};

export default MahjongGarden;