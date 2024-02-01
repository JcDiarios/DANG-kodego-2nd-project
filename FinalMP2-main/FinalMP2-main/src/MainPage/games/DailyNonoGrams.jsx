import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DailyNonoGramsImage from "../games/gameimg/dailynonograms300.webp"; // Include the appropriate file extension

const DailyNonoGrams = () => {
  return (
    <GamePreview
      imageUrl={DailyNonoGramsImage}
      gameUrl="https://cdn.htmlgames.com/DailyNonograms/"
    />
  );
};

export default DailyNonoGrams;