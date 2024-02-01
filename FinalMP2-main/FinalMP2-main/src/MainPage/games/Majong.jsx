import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MajongImage from "../games/gameimg/majong300200.webp"; // Include the appropriate file extension

const Majong = () => {
  return (
    <GamePreview
      imageUrl={MajongImage}
      gameUrl="https://cdn.htmlgames.com/Majong/"
    />
  );
};

export default Majong;