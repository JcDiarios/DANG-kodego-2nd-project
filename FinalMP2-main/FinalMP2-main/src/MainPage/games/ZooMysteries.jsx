import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ZooMysteriesImage from "../games/gameimg/zoomysteries300200.webp"; // Include the appropriate file extension

const ZooMysteries = () => {
  return (
    <GamePreview
      imageUrl={ZooMysteriesImage}
      gameUrl="https://cdn.htmlgames.com/ZooMysteries/"
    />
  );
};

export default ZooMysteries;