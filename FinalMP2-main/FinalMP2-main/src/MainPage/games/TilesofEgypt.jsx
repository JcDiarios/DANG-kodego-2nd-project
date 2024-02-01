import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TilesofEgyptImage from "../games/gameimg/tilesofegypt300200.webp"; // Include the appropriate file extension

const TilesofEgypt = () => {
  return (
    <GamePreview
      imageUrl={TilesofEgyptImage}
      gameUrl="https://cdn.htmlgames.com/TilesOfEgypt/"
    />
  );
};

export default TilesofEgypt;