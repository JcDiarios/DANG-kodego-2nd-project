import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import PyramidSolitaireImage from "../games/gameimg/pyramidmahjongsolitaire300200.webp"; // Include the appropriate file extension

const PyramidSolitaire = () => {
  return (
    <GamePreview
      imageUrl={PyramidSolitaireImage}
      gameUrl="https://cdn.htmlgames.com/PyramidMahjongSolitaire/"
    />
  );
};

export default PyramidSolitaire;