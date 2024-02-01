import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TetroClassicImage from "../games/gameimg/tetroclassic300200.webp"; // Include the appropriate file extension

const TetroClassic = () => {
  return (
    <GamePreview
      imageUrl={TetroClassicImage}
      gameUrl="https://cdn.htmlgames.com/TetroClassic/"
    />
  );
};

export default TetroClassic;