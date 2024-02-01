import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import LettersDimentionsImage from "../games/gameimg/letterdimensions300200.webp"; // Include the appropriate file extension

const LettersDimentions = () => {
  return (
    <GamePreview
      imageUrl={LettersDimentionsImage}
      gameUrl="https://cdn.htmlgames.com/LettersDimentions/"
    />
  );
};

export default LettersDimentions;