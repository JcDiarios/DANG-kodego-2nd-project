import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TheLostWorldImage from "../games/gameimg/thelostworld300.webp"; // Include the appropriate file extension

const TheLostWorld = () => {
  return (
    <GamePreview
      imageUrl={TheLostWorldImage}
      gameUrl="https://cdn.htmlgames.com/TheLostWorld/"
    />
  );
};

export default TheLostWorld;