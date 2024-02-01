import React from 'react';
import GamePreview from '../MainComponent/gamePreview';
import AirportSniperImage from '../games/gameimg/airportsniper300200.webp'; // Include the appropriate file extension
const AirportSniper = () => {
  return (
    <GamePreview
      name=""
      imageUrl={AirportSniperImage}
      gameUrl="https://cdn.htmlgames.com/AirportSniper/"
    />
  );
};

export default AirportSniper;
