import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import FloweSolitaireImage from "../games/gameimg/flowermahjongsolitaire300200.webp"; // Include the appropriate file extension

const FloweSolitaire = () => {
  return (
    <GamePreview
      imageUrl={FloweSolitaireImage}
      gameUrl="https://cdn.htmlgames.com/FlowerMahjongSolitaire/"
    />
  );
};

export default FloweSolitaire;