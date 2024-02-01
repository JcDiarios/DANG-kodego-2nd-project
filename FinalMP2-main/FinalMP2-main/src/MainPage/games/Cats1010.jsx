import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import Cats1010Image from "../games/gameimg/cats1010300200.webp"; // Include the appropriate file extension

const Cats1010 = () => {
  return (
    <GamePreview
      imageUrl={Cats1010Image}
      gameUrl="https://cdn.htmlgames.com/Cats1010/"
    />
  );
};

export default Cats1010;