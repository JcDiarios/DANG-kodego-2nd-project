import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import MysteryParadiseImage from "../games/gameimg/mysteryparadise300200.webp"; // Include the appropriate file extension

const MysteryParadise = () => {
  return (
    <GamePreview
      imageUrl={MysteryParadiseImage}
      gameUrl="https://cdn.htmlgames.com/MysteryParadise/"
    />
  );
};

export default MysteryParadise;