import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import WildWestHangmanImage from "../games/gameimg/wildwesthangman300200.webp"; // Include the appropriate file extension

const WildWestHangman = () => {
  return (
    <GamePreview
      imageUrl={WildWestHangmanImage}
      gameUrl="https://cdn.htmlgames.com/WildWestHangman/"
    />
  );
};

export default WildWestHangman;