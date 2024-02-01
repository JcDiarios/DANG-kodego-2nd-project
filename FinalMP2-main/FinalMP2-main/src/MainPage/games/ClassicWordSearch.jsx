
import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ClassicWordSearchImage from "../games/gameimg/classic-word-search-300.webp"; // Include the appropriate file extension

const ClassicWordSearch = () => {
  return (
    <GamePreview
      imageUrl={ClassicWordSearchImage}
      gameUrl="https://cdn.htmlgames.com/ClassicWordSearch/"
    />
  );
};

export default ClassicWordSearch;