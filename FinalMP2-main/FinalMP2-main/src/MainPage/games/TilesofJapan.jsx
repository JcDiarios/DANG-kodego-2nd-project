import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TilesofJapanImage from "../games/gameimg/tilesofjapan300200.webp"; // Include the appropriate file extension

const TilesofJapan = () => {
  return (
    <GamePreview
      imageUrl={TilesofJapanImage}
      gameUrl="https://cdn.htmlgames.com/TilesOfJapan/"
    />
  );
};

export default TilesofJapan;