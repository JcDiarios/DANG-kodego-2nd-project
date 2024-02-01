import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import GreedyWormImage from "../games/gameimg/greedyworm300.webp"; // Include the appropriate file extension

const GreedyWorm = () => {
  return (
    <GamePreview
      imageUrl={GreedyWormImage}
      gameUrl="https://cdn.htmlgames.com/GreedyWorm/"
    />
  );
};

export default GreedyWorm;