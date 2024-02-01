import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import Illustrations1Image from "../games/gameimg/illustrations1300200.webp"; // Include the appropriate file extension

const Illustrations1 = () => {
  return (
    <GamePreview
      imageUrl={Illustrations1Image}
      gameUrl="https://cdn.htmlgames.com/Illustrations1/"
    />
  );
};

export default Illustrations1;