import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CarromPoolImage from "../games/gameimg/carrompool300200.webp"; // Include the appropriate file extension

const CarromPool = () => {
  return (
    <GamePreview
      imageUrl={CarromPoolImage}
      gameUrl="https://cdn.htmlgames.com/CarromPool/"
    />
  );
};

export default CarromPool;