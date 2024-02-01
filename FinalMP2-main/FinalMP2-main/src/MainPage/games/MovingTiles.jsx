import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MovingTilesImage from "../games/gameimg/movingtiles300200.webp"; // Include the appropriate file extension

const MovingTiles = () => {
  return (
    <GamePreview
      imageUrl={MovingTilesImage}
      gameUrl="https://cdn.htmlgames.com/MovingTiles/"
    />
  );
};

export default MovingTiles;