import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import PraqueHiddenObjectImage from "../games/gameimg/praquehiddenobjects300200.webp"; // Include the appropriate file extension

const PraqueHiddenObject = () => {
  return (
    <GamePreview
      imageUrl={PraqueHiddenObjectImage}
      gameUrl="https://cdn.htmlgames.com/PragueHiddenObjects/"
    />
  );
};

export default PraqueHiddenObject;