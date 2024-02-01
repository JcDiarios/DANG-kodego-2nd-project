import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import OutSpaceArkanoicImage from "../games/gameimg/outerspacearkanoic300200.webp"; // Include the appropriate file extension

const OutSpaceArkanoic = () => {
  return (
    <GamePreview
      imageUrl={OutSpaceArkanoicImage}
      gameUrl="https://cdn.htmlgames.com/OuterSpaceArkanoid/"
    />
  );
};

export default OutSpaceArkanoic;