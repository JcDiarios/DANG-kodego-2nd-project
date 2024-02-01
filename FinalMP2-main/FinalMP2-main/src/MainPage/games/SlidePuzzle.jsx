import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SlidePuzzleImage from "../games/gameimg/slidepuzzle300200.webp"; // Include the appropriate file extension

const SlidePuzzle = () => {
  return (
    <GamePreview
      imageUrl={SlidePuzzleImage}
      gameUrl="https://cdn.htmlgames.com/SlidePuzzle/"
    />
  );
};

export default SlidePuzzle;