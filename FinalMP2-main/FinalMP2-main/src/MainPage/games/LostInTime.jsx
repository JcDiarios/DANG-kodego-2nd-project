import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import LostInTimeImage from "../games/gameimg/lostintime300200.webp"; // Include the appropriate file extension

const LostInTime = () => {
  return (
    <GamePreview
      imageUrl={LostInTimeImage}
      gameUrl="https://cdn.htmlgames.com/LostInTime/"
    />
  );
};

export default LostInTime;