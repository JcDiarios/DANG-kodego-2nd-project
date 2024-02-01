import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import AliceInTetrisLandImage from "../games/gameimg/aliceIntetrisland300200.webp"; // Include the appropriate file extension

const AliceInTetrisLand = () => {
  return (
    <GamePreview
      imageUrl={AliceInTetrisLandImage}
      gameUrl="https://cdn.htmlgames.com/AliceInTetrisland/"
    />
  );
};

export default AliceInTetrisLand;