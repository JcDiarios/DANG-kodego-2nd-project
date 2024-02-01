import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import LinkNumbersImage from "../games/gameimg/linknumbers300200.webp"; // Include the appropriate file extension

const LinkNumbers = () => {
  return (
    <GamePreview
      imageUrl={LinkNumbersImage}
      gameUrl="https://cdn.htmlgames.com/LinkNumbers/"
    />
  );
};

export default LinkNumbers;