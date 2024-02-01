import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import HiddenSpotsBirdsImage from "../games/gameimg/hiddenspots-birds300200.webp"; // Include the appropriate file extension

const HiddenSpotsBirds = () => {
  return (
    <GamePreview
      imageUrl={HiddenSpotsBirdsImage}
      gameUrl="https://cdn.htmlgames.com/HiddenSpotsBirds/"
    />
  );
};

export default HiddenSpotsBirds;