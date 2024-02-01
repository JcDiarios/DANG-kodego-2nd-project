import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CrystalHexagonImage from "../games/gameimg/crystalhexajong300200.webp"; // Include the appropriate file extension

const CrystalHexagon = () => {
  return (
    <GamePreview
      imageUrl={CrystalHexagonImage}
      gameUrl="https://cdn.htmlgames.com/CrystalHexajong/"
    />
  );
};

export default CrystalHexagon;