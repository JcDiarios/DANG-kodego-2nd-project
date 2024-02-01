import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import PoolBilliardImage from "../games/gameimg/poolbilliard300.webp"; // Include the appropriate file extension

const PoolBilliard = () => {
  return (
    <GamePreview
      imageUrl={PoolBilliardImage}
      gameUrl="https://cdn.htmlgames.com/PoolBilliard/"
    />
  );
};

export default PoolBilliard;