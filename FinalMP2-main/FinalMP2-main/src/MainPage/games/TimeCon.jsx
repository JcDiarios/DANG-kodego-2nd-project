import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TimeconImage from "../games/gameimg/timeconnect300200.webp"; // Include the appropriate file extension

const Timecon = () => {
  return (
    <GamePreview
      imageUrl={TimeconImage}
      gameUrl="https://cdn.htmlgames.com/TimeConnect/"
    />
  );
};

export default Timecon;