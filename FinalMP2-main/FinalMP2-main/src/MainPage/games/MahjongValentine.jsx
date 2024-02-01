import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MahjongValentineImage from "../games/gameimg/mahjonggvalentine300200.webp"; // Include the appropriate file extension

const MahjongValentine = () => {
  return (
    <GamePreview
      imageUrl={MahjongValentineImage}
      gameUrl="https://cdn.htmlgames.com/MahjonggValentine/"
    />
  );
};

export default MahjongValentine;