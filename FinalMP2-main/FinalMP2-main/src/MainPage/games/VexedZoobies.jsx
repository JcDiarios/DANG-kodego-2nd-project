import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import VexedZoobiesImage from "../games/gameimg/vexedzoobies300.webp"; // Include the appropriate file extension

const VexedZoobies = () => {
  return (
    <GamePreview
      imageUrl={VexedZoobiesImage}
      gameUrl="https://cdn.htmlgames.com/VexedZoobies/"
    />
  );
};

export default VexedZoobies;