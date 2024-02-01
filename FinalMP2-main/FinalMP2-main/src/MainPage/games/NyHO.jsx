import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import NyHOImage from "../games/gameimg/newyorkhiddenobjects300200.webp"; // Include the appropriate file extension

const NyHO = () => {
  return (
    <GamePreview
      imageUrl={NyHOImage}
      gameUrl="https://cdn.htmlgames.com/NewYorkHiddenObjects/"
    />
  );
};

export default NyHO;