import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import JollyJongBirdsImage from "../games/gameimg/jollyjongbirds300200.webp"; // Include the appropriate file extension

const JollyJongBirds = () => {
  return (
    <GamePreview
      imageUrl={JollyJongBirdsImage}
      gameUrl="https://cdn.htmlgames.com/JollyJongBirds/"
    />
  );
};

export default JollyJongBirds;