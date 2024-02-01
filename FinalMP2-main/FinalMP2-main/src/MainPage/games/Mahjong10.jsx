import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import Mahjong10Image from "../games/gameimg/10mahjong300.webp"; // Include the appropriate file extension

const Mahjong10 = () => {
  return (
    <GamePreview
      imageUrl={Mahjong10Image}
      gameUrl="https://cdn.htmlgames.com/10Mahjong/"
    />
  );
};

export default Mahjong10;