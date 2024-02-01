import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MahjongTripleDimentionImage from "../games/gameimg/mahjongtripledimensions-300200.webp"; // Include the appropriate file extension

const MahjongTripleDimention = () => {
  return (
    <GamePreview
      imageUrl={MahjongTripleDimentionImage}
      gameUrl="https://cdn.htmlgames.com/MahjongTripleDimentions/"
    />
  );
};

export default MahjongTripleDimention;