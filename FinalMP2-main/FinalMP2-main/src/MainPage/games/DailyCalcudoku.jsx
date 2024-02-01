import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DailyCalcudokuImage from "../games/gameimg/dailycalcudoku300.webp"; // Include the appropriate file extension

const DailyCalcudoku = () => {
  return (
    <GamePreview
      imageUrl={DailyCalcudokuImage}
      gameUrl="https://cdn.htmlgames.com/DailyCalcudoku/"
    />
  );
};

export default DailyCalcudoku;