import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import OlkoImage from "../games/gameimg/olko300200.webp"; // Include the appropriate file extension

const Olko = () => {
  return (
    <GamePreview
      imageUrl={OlkoImage}
      gameUrl="https://cdn.htmlgames.com/Olko/"
    />
  );
};

export default Olko;