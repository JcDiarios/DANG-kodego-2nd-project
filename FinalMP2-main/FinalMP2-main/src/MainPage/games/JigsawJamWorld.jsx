import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import JigsawJamWorldImage from "../games/gameimg/jigsawjamworld-300.webp"; // Include the appropriate file extension

const JigsawJamWorld = () => {
  return (
    <GamePreview
      imageUrl={JigsawJamWorldImage}
      gameUrl="https://cdn.htmlgames.com/JigsawJamWorld/"
    />
  );
};

export default JigsawJamWorld;