import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TetrixImage from "../games/gameimg/tetrix300200.webp"; // Include the appropriate file extension

const Tetrix = () => {
  return (
    <GamePreview
      imageUrl={TetrixImage}
      gameUrl="https://cdn.htmlgames.com/Tetrix/"
    />
  );
};

export default Tetrix;