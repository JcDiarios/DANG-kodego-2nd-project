import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import HiddenLibraryImage from "../games/gameimg/hiddenlibrary300200.webp"; // Include the appropriate file extension

const HiddenLibrary = () => {
  return (
    <GamePreview
      imageUrl={HiddenLibraryImage}
      gameUrl="https://cdn.htmlgames.com/HiddenLibrary/"
    />
  );
};

export default HiddenLibrary;