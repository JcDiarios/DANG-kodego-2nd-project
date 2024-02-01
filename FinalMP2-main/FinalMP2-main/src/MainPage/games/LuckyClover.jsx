import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import LuckyCloverImage from "../games/gameimg/luckyclover300200.webp"; // Include the appropriate file extension

const LuckyClover = () => {
  return (
    <GamePreview
      imageUrl={LuckyCloverImage}
      gameUrl="https://cdn.htmlgames.com/LuckyClover/"
    />
  );
};

export default LuckyClover;