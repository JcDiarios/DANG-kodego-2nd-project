import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import LetterTrainImage from "../games/gameimg/lettertrain300200.webp"; // Include the appropriate file extension

const LetterTrain = () => {
  return (
    <GamePreview
      imageUrl={LetterTrainImage}
      gameUrl="https://cdn.htmlgames.com/LetterTrain/"
    />
  );
};

export default LetterTrain;