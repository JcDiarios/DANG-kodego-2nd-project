import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import SpaceImage from "../games/gameimg/space300200.webp"; // Include the appropriate file extension

const Space = () => {
  return (
    <GamePreview
      imageUrl={SpaceImage}
      gameUrl="https://cdn.htmlgames.com/Space/"
    />
  );
};

export default Space;