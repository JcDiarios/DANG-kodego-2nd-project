import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import KinsandKnightsImage from "../games/gameimg/kingsandknights300200.webp"; // Include the appropriate file extension

const KinsandKnights = () => {
  return (
    <GamePreview
      imageUrl={KinsandKnightsImage}
      gameUrl="https://cdn.htmlgames.com/KingsAndKnights/"
    />
  );
};

export default KinsandKnights;