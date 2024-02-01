import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ClassicFrogImage from "../games/gameimg/classicfrog300200.webp"; // Include the appropriate file extension

const ClassicFrog = () => {
  return (
    <GamePreview
      imageUrl={ClassicFrogImage}
      gameUrl="https://cdn.htmlgames.com/ClassicFrog/"
    />
  );
};

export default ClassicFrog;