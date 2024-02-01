import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MedievalMergeImage from "../games/gameimg/medievalmerge300200.webp"; // Include the appropriate file extension

const MedievalMerge = () => {
  return (
    <GamePreview
      imageUrl={MedievalMergeImage}
      gameUrl="https://cdn.htmlgames.com/MedievalMerge/"
    />
  );
};

export default MedievalMerge;