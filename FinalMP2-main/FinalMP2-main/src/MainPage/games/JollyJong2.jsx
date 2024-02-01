import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import JollyJong2Image from "../games/gameimg/jollyjong2300200.webp"; // Include the appropriate file extension

const JollyJong2 = () => {
  return (
    <GamePreview
      imageUrl={JollyJong2Image}
      gameUrl="https://cdn.htmlgames.com/JollyJong2/"
    />
  );
};

export default JollyJong2;