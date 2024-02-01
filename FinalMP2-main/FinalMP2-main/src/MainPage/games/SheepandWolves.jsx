import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SheepandWolvesImage from "../games/gameimg/sheepandwolves300.webp"; // Include the appropriate file extension

const SheepandWolves = () => {
  return (
    <GamePreview
      imageUrl={SheepandWolvesImage}
      gameUrl="https://cdn.htmlgames.com/SheepAndWolves/"
    />
  );
};

export default SheepandWolves;