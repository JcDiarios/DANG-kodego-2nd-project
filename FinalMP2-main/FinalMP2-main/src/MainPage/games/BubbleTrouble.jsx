import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BubbleTroubleImage from "../games/gameimg/bubbletrouble300200.webp"; // Include the appropriate file extension

const BubbleTrouble = () => {
  return (
    <GamePreview
      imageUrl={BubbleTroubleImage}
      gameUrl="https://cdn.htmlgames.com/BubbleTrouble/"
    />
  );
};

export default BubbleTrouble;
