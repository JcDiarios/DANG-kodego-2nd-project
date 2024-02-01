import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SquirrelConImage from "../games/gameimg/squirrelconnection300200.webp"; // Include the appropriate file extension

const SquirrelCon = () => {
  return (
    <GamePreview
      imageUrl={SquirrelConImage}
      gameUrl="https://cdn.htmlgames.com/SquirrelConnection/"
    />
  );
};

export default SquirrelCon;