import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import JigsawJamCarsImage from "../games/gameimg/jigsawjamcars300200.webp"; // Include the appropriate file extension

const JigsawJamCars = () => {
  return (
    <GamePreview
      imageUrl={JigsawJamCarsImage}
      gameUrl="https://cdn.htmlgames.com/JigsawJamCars/"
    />
  );
};

export default JigsawJamCars;