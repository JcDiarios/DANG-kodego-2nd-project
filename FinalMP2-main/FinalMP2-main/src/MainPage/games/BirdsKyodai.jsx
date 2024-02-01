import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BirdsKyodaiImage from "../games/gameimg/birdskyodai300200.webp"; // Include the appropriate file extension

const BirdsKyodai = () => {
  return (
    <GamePreview
      imageUrl={BirdsKyodaiImage}
      gameUrl="https://cdn.htmlgames.com/BirdsKyodai/"
    />
  );
};

export default BirdsKyodai;