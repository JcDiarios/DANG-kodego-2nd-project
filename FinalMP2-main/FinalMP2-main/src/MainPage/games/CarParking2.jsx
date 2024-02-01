import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CarParking2Image from "../games/gameimg/carparking2-300.webp"; // Include the appropriate file extension

const CarParking2 = () => {
  return (
    <GamePreview
      imageUrl={CarParking2Image}
      gameUrl="https://cdn.htmlgames.com/CarParking2/"
    />
  );
};

export default CarParking2;