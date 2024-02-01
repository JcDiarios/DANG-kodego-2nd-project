import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import JollyJong25Image from "../games/gameimg/jollyjong2.5300200.webp"; // Include the appropriate file extension

const JollyJong25 = () => {
  return (
    <GamePreview
      imageUrl={JollyJong25Image}
      gameUrl="https://cdn.htmlgames.com/JollyJong2.5/"
    />
  );
};

export default JollyJong25;