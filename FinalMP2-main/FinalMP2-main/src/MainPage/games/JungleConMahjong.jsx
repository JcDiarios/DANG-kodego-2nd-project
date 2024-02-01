import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import JungleConMahjongImage from "../games/gameimg/mahjongconnectjungle300200.webp"; // Include the appropriate file extension

const JungleConMahjong = () => {
  return (
    <GamePreview
      imageUrl={JungleConMahjongImage}
      gameUrl="https://cdn.htmlgames.com/MahjongConnectJungle/"
    />
  );
};

export default JungleConMahjong;