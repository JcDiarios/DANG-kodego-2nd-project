import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MedievalCastleHLImage from "../games/gameimg/medievalcastlehiddenletters300200.webp"; // Include the appropriate file extension

const MedievalCastleHL = () => {
  return (
    <GamePreview
      imageUrl={MedievalCastleHLImage}
      gameUrl="https://cdn.htmlgames.com/MedievalCastleHiddenLetters/"
    />
  );
};

export default MedievalCastleHL;