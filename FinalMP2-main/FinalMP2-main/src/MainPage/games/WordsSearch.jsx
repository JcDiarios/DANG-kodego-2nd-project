import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import WordsSearchImage from "../games/gameimg/wordsearch300.webp"; // Include the appropriate file extension

const WordsSearch = () => {
  return (
    <GamePreview
      imageUrl={WordsSearchImage}
      gameUrl="https://cdn.htmlgames.com/WordSearch/"
    />
  );
};

export default WordsSearch;