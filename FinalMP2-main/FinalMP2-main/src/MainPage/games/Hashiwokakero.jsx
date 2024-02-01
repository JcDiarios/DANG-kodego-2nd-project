import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import HashiwokakeroImage from "../games/gameimg/hashiwokakero300.webp"; // Include the appropriate file extension

const Hashiwokakero = () => {
  return (
    <GamePreview
      imageUrl={HashiwokakeroImage}
      gameUrl="https://cdn.htmlgames.com/Hashiwokakero/"
    />
  );
};

export default Hashiwokakero;