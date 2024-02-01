import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DailyTracksImage from "../games/gameimg/dailytracks300.webp"; // Include the appropriate file extension

const DailyTracks = () => {
  return (
    <GamePreview
      imageUrl={DailyTracksImage}
      gameUrl="https://cdn.htmlgames.com/DailyTracks/"
    />
  );
};

export default DailyTracks;