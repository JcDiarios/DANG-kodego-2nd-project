import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DailyNumbrixImage from "../games/gameimg/dailynumbrix300.webp"; // Include the appropriate file extension

const DailyNumbrix = () => {
  return (
    <GamePreview
      imageUrl={DailyNumbrixImage}
      gameUrl="https://cdn.htmlgames.com/DailyNumbrix/"
    />
  );
};

export default DailyNumbrix;