import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import OriginalMahjongImage from "../games/gameimg/originalmahjongg300200.webp"; // Include the appropriate file extension

const OriginalMahjong = () => {
  return (
    <GamePreview
      imageUrl={OriginalMahjongImage}
      gameUrl="https://cdn.htmlgames.com/OriginalMahjongg/"
    />
  );
};

export default OriginalMahjong;OriginalMahjong