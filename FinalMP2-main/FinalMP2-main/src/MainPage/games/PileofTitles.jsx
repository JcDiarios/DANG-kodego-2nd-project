import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import PileofTitlesImage from "../games/gameimg/pileoftiles300200.webp"; // Include the appropriate file extension

const PileofTitles = () => {
  return (
    <GamePreview
      imageUrl={PileofTitlesImage}
      gameUrl="https://cdn.htmlgames.com/PileOfTiles/"
    />
  );
};

export default PileofTitles;