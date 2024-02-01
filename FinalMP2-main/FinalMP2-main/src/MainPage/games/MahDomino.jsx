import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MahDominoImage from "../games/gameimg/mah-domino300200.webp"; // Include the appropriate file extension

const MahDomino = () => {
  return (
    <GamePreview
      imageUrl={MahDominoImage}
      gameUrl="https://cdn.htmlgames.com/Mah-Domino/"
    />
  );
};

export default MahDomino;