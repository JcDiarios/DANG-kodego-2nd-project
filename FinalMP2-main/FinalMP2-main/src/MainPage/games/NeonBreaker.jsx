import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import NeonBreakerImage from "../games/gameimg/neonbreaker300200.webp"; // Include the appropriate file extension

const NeonBreaker = () => {
  return (
    <GamePreview
      imageUrl={NeonBreakerImage}
      gameUrl="https://cdn.htmlgames.com/NeonBreaker/"
    />
  );
};

export default NeonBreaker;