import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import Illuminate1Image from "../games/gameimg/illuminate1300.webp"; // Include the appropriate file extension

const Illuminate1 = () => {
  return (
    <GamePreview
      imageUrl={Illuminate1Image}
      gameUrl="https://cdn.htmlgames.com/Illuminate1/"
    />
  );
};

export default Illuminate1;