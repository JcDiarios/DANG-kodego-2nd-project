import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import EndlessBreakOutImage from "../games/gameimg/endlessbreakout300200.webp"; // Include the appropriate file extension

const EndlessBreakOut = () => {
  return (
    <GamePreview
      imageUrl={EndlessBreakOutImage}
      gameUrl="https://cdn.htmlgames.com/EndlessBreakOut/"
    />
  );
};

export default EndlessBreakOut;