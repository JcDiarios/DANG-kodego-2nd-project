import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import WorldsGreatestCitiesImage from "../games/gameimg/worldsgreatestcities300200.webp"; // Include the appropriate file extension

const WorldsGreatestCities = () => {
  return (
    <GamePreview
      imageUrl={WorldsGreatestCitiesImage}
      gameUrl="https://cdn.htmlgames.com/WorldsGreatestCities/"
    />
  );
};

export default WorldsGreatestCities;