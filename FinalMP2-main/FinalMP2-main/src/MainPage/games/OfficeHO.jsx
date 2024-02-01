import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import OfficeHOImage from "../games/gameimg/officehiddenobjects300200.webp"; // Include the appropriate file extension

const OfficeHO = () => {
  return (
    <GamePreview
      imageUrl={OfficeHOImage}
      gameUrl="https://cdn.htmlgames.com/OfficeHiddenObjects/"
    />
  );
};

export default OfficeHO;