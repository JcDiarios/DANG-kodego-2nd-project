import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CityFuseImage from "../games/gameimg/cityfuse300200.webp"; // Include the appropriate file extension

const CityFuse = () => {
  return (
    <GamePreview
      imageUrl={CityFuseImage}
      gameUrl="https://cdn.htmlgames.com/CityFuse/"
    />
  );
};

export default CityFuse;