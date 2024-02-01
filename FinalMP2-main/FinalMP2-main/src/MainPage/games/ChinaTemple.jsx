import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ChinaTempleImage from "../games/gameimg/chinatemple300200.webp"; // Include the appropriate file extension

const ChinaTemple = () => {
  return (
    <GamePreview
      imageUrl={ChinaTempleImage}
      gameUrl="https://cdn.htmlgames.com/ChinaTemple/"
    />
  );
};

export default ChinaTemple;