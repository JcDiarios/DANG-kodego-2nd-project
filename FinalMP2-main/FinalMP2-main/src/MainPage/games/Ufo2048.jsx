import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import Ufo2048Image from "../games/gameimg/2048ufo300200.webp"; // Include the appropriate file extension

const Ufo2048 = () => {
  return (
    <GamePreview
      imageUrl={Ufo2048Image}
      gameUrl="https://cdn.htmlgames.com/2048UFO/"
    />
  );
};

export default Ufo2048;