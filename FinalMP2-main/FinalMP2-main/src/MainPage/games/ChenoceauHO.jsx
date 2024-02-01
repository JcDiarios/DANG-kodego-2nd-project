import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ChenoceauHOImage from "../games/gameimg/chenonceauhiddenobjects300200.webp"; // Include the appropriate file extension

const ChenoceauHO = () => {
  return (
    <GamePreview
      imageUrl={ChenoceauHOImage}
      gameUrl="https://cdn.htmlgames.com/ChenonceauHiddenObjects/"
    />
  );
};

export default ChenoceauHO;