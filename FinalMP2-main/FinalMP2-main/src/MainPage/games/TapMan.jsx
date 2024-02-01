import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TapManImage from "../games/gameimg/tapman300.webp"; // Include the appropriate file extension

const TapMan = () => {
  return (
    <GamePreview
      imageUrl={TapManImage}
      gameUrl="https://cdn.htmlgames.com/Tapman/"
    />
  );
};

export default TapMan;