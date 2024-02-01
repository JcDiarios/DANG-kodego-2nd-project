import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BlacktoWhiteImage from "../games/gameimg/blacktowhite300200.webp"; // Include the appropriate file extension

const BlacktoWhite = () => {
  return (
    <GamePreview
      imageUrl={BlacktoWhiteImage}
      gameUrl="https://cdn.htmlgames.com/BlackToWhite/"
    />
  );
};

export default BlacktoWhite;