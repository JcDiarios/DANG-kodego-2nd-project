import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import JollyJongDogsImage from "../games/gameimg/jollyjongdogs300200.webp"; // Include the appropriate file extension

const JollyJongDogs = () => {
  return (
    <GamePreview
      imageUrl={JollyJongDogsImage}
      gameUrl="https://cdn.htmlgames.com/JollyJongDogs/"
    />
  );
};

export default JollyJongDogs;