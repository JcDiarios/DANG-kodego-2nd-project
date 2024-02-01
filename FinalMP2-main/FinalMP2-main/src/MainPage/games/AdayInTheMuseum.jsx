import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import AdayInTheMuseumImage from "../games/gameimg/adayinthemuseum300200.webp"; // Include the appropriate file extension

const AdayInTheMuseum = () => {
  return (
    <GamePreview
      imageUrl={AdayInTheMuseumImage}
      gameUrl="https://cdn.htmlgames.com/ADayInTheMuseum/"
    />
  );
};

export default AdayInTheMuseum;