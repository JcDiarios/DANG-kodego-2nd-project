import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DailyHexnumImage from "../games/gameimg/dailyhexnum300.webp"; // Include the appropriate file extension

const DailyHexnum = () => {
  return (
    <GamePreview
      imageUrl={DailyHexnumImage}
      gameUrl="https://cdn.htmlgames.com/DailyHexNum/"
    />
  );
};

export default DailyHexnum;