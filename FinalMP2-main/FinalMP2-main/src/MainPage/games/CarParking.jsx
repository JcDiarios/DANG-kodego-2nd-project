import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CarParkingImage from "../games/gameimg/carparking-300.webp"; // Include the appropriate file extension

const CarParking = () => {
  return (
    <GamePreview
      imageUrl={CarParkingImage}
      gameUrl="https://cdn.htmlgames.com/CarParking/"
    />
  );
};

export default CarParking;