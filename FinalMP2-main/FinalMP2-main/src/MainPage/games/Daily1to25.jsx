import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import Daily1to25Image from "../games/gameimg/daily1to25300.webp"; // Include the appropriate file extension

const Daily1to25 = () => {
  return (
    <GamePreview
      imageUrl={Daily1to25Image}
      gameUrl="https://cdn.htmlgames.com/Daily1to25/"
    />
  );
};

export default Daily1to25;