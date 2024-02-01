import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SymbolicImage from "../games/gameimg/symbolic300200.webp"; // Include the appropriate file extension

const Symbolic = () => {
  return (
    <GamePreview
      imageUrl={SymbolicImage}
      gameUrl="https://cdn.htmlgames.com/Symbolic/"
    />
  );
};

export default Symbolic;