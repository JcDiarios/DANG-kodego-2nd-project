import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SpookyMahjongImage from "../games/gameimg/spookymahjong300200.webp"; // Include the appropriate file extension

const SpookyMahjong = () => {
  return (
    <GamePreview
      imageUrl={SpookyMahjongImage}
      gameUrl="https://cdn.htmlgames.com/SpookyMahjong/"
    />
  );
};

export default SpookyMahjong;