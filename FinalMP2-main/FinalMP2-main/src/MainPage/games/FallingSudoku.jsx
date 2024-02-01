import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import FallingSudokuImage from "../games/gameimg/fallingsudoku300200.webp"; // Include the appropriate file extension

const FallingSudoku = () => {
  return (
    <GamePreview
      imageUrl={FallingSudokuImage}
      gameUrl="https://cdn.htmlgames.com/FallingSudoku/"
    />
  );
};

export default FallingSudoku;