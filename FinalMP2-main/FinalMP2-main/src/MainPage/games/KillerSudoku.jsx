import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import KillerSudokuImage from "../games/gameimg/killersudoku300200.webp"; // Include the appropriate file extension

const KillerSudoku = () => {
  return (
    <GamePreview
      imageUrl={KillerSudokuImage}
      gameUrl="https://cdn.htmlgames.com/KillerSudoku/"
    />
  );
};

export default KillerSudoku;