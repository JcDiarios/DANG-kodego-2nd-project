import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CircusHiddenNumbersImage from "../games/gameimg/circushiddennumbers300200.webp"; // Include the appropriate file extension

const CircusHiddenNumbers = () => {
  return (
    <GamePreview
      imageUrl={CircusHiddenNumbersImage}
      gameUrl="https://cdn.htmlgames.com/CircusHiddenNumbers/"
    />
  );
};

export default CircusHiddenNumbers;