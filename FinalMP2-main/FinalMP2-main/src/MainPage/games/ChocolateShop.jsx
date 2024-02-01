import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ChocolateShopImage from "../games/gameimg/chocolateshop300200.webp"; // Include the appropriate file extension

const ChocolateShop = () => {
  return (
    <GamePreview
      imageUrl={ChocolateShopImage}
      gameUrl="https://cdn.htmlgames.com/ChocolateShop/"
    />
  );
};

export default ChocolateShop;