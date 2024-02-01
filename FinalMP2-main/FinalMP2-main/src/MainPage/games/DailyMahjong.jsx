import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DailyMahjongImage from "../games/gameimg/dailymahjongg300.webp"; // Include the appropriate file extension

const DailyMahjong = () => {
  return (
    <GamePreview
      imageUrl={DailyMahjongImage}
      gameUrl="https://cdn.htmlgames.com/DailyMahjongg/"
    />
  );
};

export default DailyMahjong;