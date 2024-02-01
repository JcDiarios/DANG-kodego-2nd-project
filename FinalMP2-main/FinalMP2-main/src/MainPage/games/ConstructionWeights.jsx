import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ConstructionWeightsImage from "../games/gameimg/constructionweights300.webp"; // Include the appropriate file extension

const ConstructionWeights = () => {
  return (
    <GamePreview
      imageUrl={ConstructionWeightsImage}
      gameUrl="https://cdn.htmlgames.com/ConstructionWeights/"
    />
  );
};

export default ConstructionWeights;