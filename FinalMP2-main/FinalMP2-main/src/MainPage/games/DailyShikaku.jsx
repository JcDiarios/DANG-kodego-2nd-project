import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DailyShikakuImage from "../games/gameimg/dailyshikaku300.webp"; // Include the appropriate file extension

const DailyShikaku = () => {
  return (
    <GamePreview
      imageUrl={DailyShikakuImage}
      gameUrl="https://cdn.htmlgames.com/DailyShikaku/"
    />
  );
};

export default DailyShikaku;