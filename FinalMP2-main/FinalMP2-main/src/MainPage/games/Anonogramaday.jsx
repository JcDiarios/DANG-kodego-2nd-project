import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import AnonogramadayImage from "../games/gameimg/anonogramaday300.webp"; // Include the appropriate file extension

const Anonogramaday = () => {
  return (
    <GamePreview
      imageUrl={AnonogramadayImage}
      gameUrl="https://cdn.htmlgames.com/ANonogramADay/"
    />
  );
};

export default Anonogramaday;