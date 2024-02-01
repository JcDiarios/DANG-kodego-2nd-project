import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import LetterMahjongImage from "../games/gameimg/lettermahjong300.webp"; // Include the appropriate file extension

const LetterMahjong = () => {
  return (
    <GamePreview
      imageUrl={LetterMahjongImage}
      gameUrl="https://cdn.htmlgames.com/LetterMahjong/"
    />
  );
};

export default LetterMahjong;