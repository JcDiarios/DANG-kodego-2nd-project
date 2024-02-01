import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TravelLersquestImage from "../games/gameimg/travelersquest300200.webp"; // Include the appropriate file extension

const TravelLersquest = () => {
  return (
    <GamePreview
      imageUrl={TravelLersquestImage}
      gameUrl="https://cdn.htmlgames.com/TravelersQuest/"
    />
  );
};

export default TravelLersquest;