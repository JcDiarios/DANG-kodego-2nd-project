import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import WoggleImage from "../games/gameimg/woggle300200.webp"; // Include the appropriate file extension

const Woggle = () => {
  return (
    <GamePreview
      imageUrl={WoggleImage}
      gameUrl="https://cdn.htmlgames.com/Woggle/"
    />
  );
};

export default Woggle;