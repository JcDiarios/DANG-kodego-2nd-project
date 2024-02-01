import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DailyCheckItImage from "../games/gameimg/dailycheckit300.webp"; // Include the appropriate file extension

const DailyCheckIt = () => {
  return (
    <GamePreview
      imageUrl={DailyCheckItImage}
      gameUrl="https://cdn.htmlgames.com/DailyCheckit/"
    />
  );
};

export default DailyCheckIt;