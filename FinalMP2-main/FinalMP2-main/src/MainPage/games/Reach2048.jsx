import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import Reach2048Image from "../games/gameimg/reach2048-300200.webp"; // Include the appropriate file extension

const Reach2048 = () => {
  return (
    <GamePreview
      imageUrl={Reach2048Image}
      gameUrl="https://cdn.htmlgames.com/Reach2048/"
    />
  );
};

export default Reach2048;