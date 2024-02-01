import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CandyConImage from "../games/gameimg/candyconnect300200.webp"; // Include the appropriate file extension

const CandyCon = () => {
  return (
    <GamePreview
      imageUrl={CandyConImage}
      gameUrl="https://cdn.htmlgames.com/CandyConnect/"
    />
  );
};

export default CandyCon;