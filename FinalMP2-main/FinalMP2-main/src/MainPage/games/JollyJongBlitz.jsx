import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import JollyJongBlitzImage from "../games/gameimg/jollyjongblitz300200.webp"; // Include the appropriate file extension

const JollyJongBlitz = () => {
  return (
    <GamePreview
      imageUrl={JollyJongBlitzImage}
      gameUrl="https://cdn.htmlgames.com/JollyJongBlitz/"
    />
  );
};

export default JollyJongBlitz;