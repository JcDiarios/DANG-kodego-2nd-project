import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BbqRoastImage from "../games/gameimg/bbqroast300200.webp"; // Include the appropriate file extension

const BbqRoast = () => {
  return (
    <GamePreview
      imageUrl={BbqRoastImage}
      gameUrl="https://cdn.htmlgames.com/BBQRoast/"
    />
  );
};

export default BbqRoast;