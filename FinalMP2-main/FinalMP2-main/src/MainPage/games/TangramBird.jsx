import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TangramBirdImage from "../games/gameimg/tangrambird300200.webp"; // Include the appropriate file extension

const TangramBird = () => {
  return (
    <GamePreview
      imageUrl={TangramBirdImage}
      gameUrl="https://cdn.htmlgames.com/TangramBird/"
    />
  );
};

export default TangramBird;