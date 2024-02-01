import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import PenguinWordTwistImage from "../games/gameimg/penguinwordtwist300200.webp"; // Include the appropriate file extension

const PenguinWordTwist = () => {
  return (
    <GamePreview
      imageUrl={PenguinWordTwistImage}
      gameUrl="https://cdn.htmlgames.com/PenguinWordTwist/"
    />
  );
};

export default PenguinWordTwist;