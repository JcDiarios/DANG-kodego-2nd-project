import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DailySudokuImage from "../games/gameimg/dailysudoku300x200.webp"; // Include the appropriate file extension

const DailySudoku = () => {
  return (
    <GamePreview
      imageUrl={DailySudokuImage}
      gameUrl="https://cdn.htmlgames.com/DailySudoku/"
    />
  );
};

export default DailySudoku;