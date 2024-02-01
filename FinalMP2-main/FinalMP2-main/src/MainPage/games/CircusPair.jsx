import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CircusPairImage from "../games/gameimg/circuspairs300.webp"; // Include the appropriate file extension

const CircusPair = () => {
  return (
    <GamePreview
      imageUrl={CircusPairImage}
      gameUrl="https://cdn.htmlgames.com/CircusPairs/"
    />
  );
};

export default CircusPair;