import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import AncientMahjongImage from "../games/gameimg/ancientmahjong300.webp"; // Include the appropriate file extension

const AncientMahjong = () => {
  return (
    <GamePreview
      imageUrl={AncientMahjongImage}
      gameUrl="https://cdn.htmlgames.com/AncientMahjong/"
    />
  );
};

export default AncientMahjong;