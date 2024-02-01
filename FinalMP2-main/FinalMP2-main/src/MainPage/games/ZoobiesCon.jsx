import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ZoobiesConImage from "../games/gameimg/zoobiesconnect300200.webp"; // Include the appropriate file extension

const ZoobiesCon = () => {
  return (
    <GamePreview
      imageUrl={ZoobiesConImage}
      gameUrl="https://cdn.htmlgames.com/ZoobiesConnect/"
    />
  );
};

export default ZoobiesCon;