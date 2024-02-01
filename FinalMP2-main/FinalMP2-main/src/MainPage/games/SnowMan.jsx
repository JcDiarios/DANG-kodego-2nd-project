import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SnowManImage from "../games/gameimg/snowman300.webp"; // Include the appropriate file extension

const SnowMan = () => {
  return (
    <GamePreview
      imageUrl={SnowManImage}
      gameUrl="https://cdn.htmlgames.com/SnowMan/"
    />
  );
};

export default SnowMan;