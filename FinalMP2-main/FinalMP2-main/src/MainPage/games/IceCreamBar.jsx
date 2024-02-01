import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import IceCreamBarImage from "../games/gameimg/icecreambar300200.webp"; // Include the appropriate file extension

const IceCreamBar = () => {
  return (
    <GamePreview
      imageUrl={IceCreamBarImage}
      gameUrl="https://cdn.htmlgames.com/IceCreamBar/"
    />
  );
};

export default IceCreamBar;