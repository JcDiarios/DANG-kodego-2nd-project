import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import PlaygroundDifferencesImage from "../games/gameimg/playgrounddifferences300200.webp"; // Include the appropriate file extension

const PlaygroundDifferences = () => {
  return (
    <GamePreview
      imageUrl={PlaygroundDifferencesImage}
      gameUrl="https://cdn.htmlgames.com/PlaygroundDifferences/"
    />
  );
};

export default PlaygroundDifferences;