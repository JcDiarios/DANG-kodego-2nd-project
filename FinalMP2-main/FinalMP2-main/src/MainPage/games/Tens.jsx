import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TensImage from "../games/gameimg/tens300200.webp"; // Include the appropriate file extension

const Tens = () => {
  return (
    <GamePreview
      imageUrl={TensImage}
      gameUrl="https://cdn.htmlgames.com/Tens/"
    />
  );
};

export default Tens;