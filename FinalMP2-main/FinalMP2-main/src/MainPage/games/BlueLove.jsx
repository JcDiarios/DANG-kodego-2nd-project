import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BlueLoveImage from "../games/gameimg/blublove300200.webp"; // Include the appropriate file extension

const BlueLove = () => {
  return (
    <GamePreview
      imageUrl={BlueLoveImage}
      gameUrl="https://cdn.htmlgames.com/BlubLove/"
    />
  );
};

export default BlueLove;