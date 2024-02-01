import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CatleMysteriesImage from "../games/gameimg/castlemysteries300200.webp"; // Include the appropriate file extension

const CatleMysteries = () => {
  return (
    <GamePreview
      imageUrl={CatleMysteriesImage}
      gameUrl="https://cdn.htmlgames.com/CastleMysteries/"
    />
  );
};

export default CatleMysteries;