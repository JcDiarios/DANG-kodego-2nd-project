import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DailyfutoshikiImage from "../games/gameimg/dailyfutoshiki300.webp"; // Include the appropriate file extension

const Dailyfutoshiki = () => {
  return (
    <GamePreview
      imageUrl={DailyfutoshikiImage}
      gameUrl="https://cdn.htmlgames.com/DailyFutoshiki/"
    />
  );
};

export default Dailyfutoshiki;