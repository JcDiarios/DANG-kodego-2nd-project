import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MasterQwansMahjongImage from "../games/gameimg/masterqwansmahjong300200.webp"; // Include the appropriate file extension

const MasterQwansMahjong = () => {
  return (
    <GamePreview
      imageUrl={MasterQwansMahjongImage}
      gameUrl="https://cdn.htmlgames.com/MasterQwansMahjong/"
    />
  );
};

export default MasterQwansMahjong;