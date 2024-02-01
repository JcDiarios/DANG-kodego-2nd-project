import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DailyLoopImage from "../games/gameimg/dailyloop300.webp"; // Include the appropriate file extension

const DailyLoop = () => {
  return (
    <GamePreview
      imageUrl={DailyLoopImage}
      gameUrl="https://cdn.htmlgames.com/DailyLoop/"
    />
  );
};

export default DailyLoop;