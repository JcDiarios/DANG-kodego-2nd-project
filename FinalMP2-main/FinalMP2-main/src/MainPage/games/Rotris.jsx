import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import RotrisImage from "../games/gameimg/rotris300200.webp"; // Include the appropriate file extension

const Rotris = () => {
  return (
    <GamePreview
      imageUrl={RotrisImage}
      gameUrl="https://cdn.htmlgames.com/Rotris/"
    />
  );
};

export default Rotris;