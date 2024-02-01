import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import AirportManagement2Image from "../games/gameimg/airportmanagement2300200.webp"; // Include the appropriate file extension

const AirportManagement2 = () => {
  return (
    <GamePreview
      imageUrl={AirportManagement2Image}
      gameUrl="https://cdn.htmlgames.com/AirportManagement2/"
    />
  );
};

export default AirportManagement2;