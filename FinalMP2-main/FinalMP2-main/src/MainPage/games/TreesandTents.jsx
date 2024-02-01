import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TreesandTentsImage from "../games/gameimg/treesandtents300.webp"; // Include the appropriate file extension

const TreesandTents = () => {
  return (
    <GamePreview
      imageUrl={TreesandTentsImage}
      gameUrl="https://cdn.htmlgames.com/DailyTreesAndTents/"
    />
  );
};

export default TreesandTents;