import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MahjongGarden2Image from "../games/gameimg/mahjonggarden2300.webp"; // Include the appropriate file extension

const MahjongGarden2 = () => {
  return (
    <GamePreview
      imageUrl={MahjongGarden2Image}
      gameUrl="https://cdn.htmlgames.com/MahjongGardens2/"
    />
  );
};

export default MahjongGarden2;