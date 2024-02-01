import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SportMahjongImage from "../games/gameimg/sportsmahjong300200.webp"; // Include the appropriate file extension

const SportMahjong = () => {
  return (
    <GamePreview
      imageUrl={SportMahjongImage}
      gameUrl="https://cdn.htmlgames.com/SportsMahjong/"
    />
  );
};

export default SportMahjong;