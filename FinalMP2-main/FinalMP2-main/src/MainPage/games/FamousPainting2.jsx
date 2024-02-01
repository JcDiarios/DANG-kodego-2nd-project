import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import FamousPainting2Image from "../games/gameimg/famouspaintings2300200.webp"; // Include the appropriate file extension

const FamousPainting2 = () => {
  return (
    <GamePreview
      imageUrl={FamousPainting2Image}
      gameUrl="https://cdn.htmlgames.com/FamousPaintings2/"
    />
  );
};

export default FamousPainting2;