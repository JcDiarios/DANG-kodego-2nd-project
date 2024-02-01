import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DarkMahjongImage from "../games/gameimg/darkmahjongconnect300200.webp"; // Include the appropriate file extension

const DarkMahjong = () => {
  return (
    <GamePreview
      imageUrl={DarkMahjongImage}
      gameUrl="https://cdn.htmlgames.com/DarkMahjongConnect/"
    />
  );
};

export default DarkMahjong;