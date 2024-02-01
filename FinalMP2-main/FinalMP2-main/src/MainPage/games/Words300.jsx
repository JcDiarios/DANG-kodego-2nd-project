import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import Words300Image from "../games/gameimg/words300.webp"; // Include the appropriate file extension

const Words300 = () => {
  return (
    <GamePreview
      imageUrl={Words300Image}
      gameUrl="https://cdn.htmlgames.com/Words/"
    />
  );
};

export default Words300;