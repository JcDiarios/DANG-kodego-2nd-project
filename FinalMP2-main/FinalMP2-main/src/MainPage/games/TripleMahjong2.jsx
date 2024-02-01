import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TripleMahjong2Image from "../games/gameimg/triplemahjongg2300200.webp"; // Include the appropriate file extension

const TripleMahjong2 = () => {
  return (
    <GamePreview
      imageUrl={TripleMahjong2Image}
      gameUrl="https://cdn.htmlgames.com/TripleMahjong2/"
    />
  );
};

export default TripleMahjong2;