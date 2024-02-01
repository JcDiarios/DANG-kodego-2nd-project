import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CrossWordsImage from "../games/gameimg/crosswords2300200.webp"; // Include the appropriate file extension

const CrossWords2 = () => {
  return (
    <GamePreview
      imageUrl={CrossWordsImage}
      gameUrl="https://cdn.htmlgames.com/Crosswords2/"
    />
  );
};

export default CrossWords2;