import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import FruitFlipMahjongImage from "../games/gameimg/fruitflipmahjong300200.webp"; // Include the appropriate file extension

const FruitFlipMahjong = () => {
  return (
    <GamePreview
      imageUrl={FruitFlipMahjongImage}
      gameUrl="https://cdn.htmlgames.com/FruitFlipMahjongg/"
    />
  );
};

export default FruitFlipMahjong;