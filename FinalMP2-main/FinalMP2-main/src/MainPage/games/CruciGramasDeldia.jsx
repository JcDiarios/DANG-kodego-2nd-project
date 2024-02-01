import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CruciGramasDeldiaImage from "../games/gameimg/crucigramasdeldia300.webp"; // Include the appropriate file extension

const CruciGramasDeldia = () => {
  return (
    <GamePreview
      imageUrl={CruciGramasDeldiaImage}
      gameUrl="https://cdn.htmlgames.com/CrucigramasDelDia/"
    />
  );
};

export default CruciGramasDeldia;