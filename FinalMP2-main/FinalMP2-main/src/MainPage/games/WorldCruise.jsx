import React from 'react';
import WorldCruiseImage from "../games/gameimg/worldcruise300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const WorldCruise = () => {
  return (
    <GamePreview
      imageUrl={WorldCruiseImage}
      gameUrl="https://cdn.htmlgames.com/WorldCruise/"
    />
  );
};

export default WorldCruise;