import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MahjongMatchImage from "../games/gameimg/mahjongmatch300200.webp"; // Include the appropriate file extension

const MahjongMatch = () => {
  return (
    <GamePreview
      imageUrl={MahjongMatchImage}
      gameUrl="https://cdn.htmlgames.com/MahjongMatch/"
    />
  );
};

export default MahjongMatch;