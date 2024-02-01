import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CruiseShipsHOImage from "../games/gameimg/cruiseshiphiddenobjects300200.webp"; // Include the appropriate file extension

const CruiseShipsHO = () => {
  return (
    <GamePreview
      imageUrl={CruiseShipsHOImage}
      gameUrl="https://cdn.htmlgames.com/CruiseShipHiddenObjects/"
    />
  );
};

export default CruiseShipsHO;