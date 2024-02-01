import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import GlowJonggImage from "../games/gameimg/glowjongg300200.webp"; // Include the appropriate file extension

const GlowJongg = () => {
  return (
    <GamePreview
      imageUrl={GlowJonggImage}
      gameUrl="https://cdn.htmlgames.com/GlowJongg/"
    />
  );
};

export default GlowJongg;