import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import RailWayMysteriesImage from "../games/gameimg/railwaymysteries300200.webp"; // Include the appropriate file extension

const RailWayMysteries = () => {
  return (
    <GamePreview
      imageUrl={RailWayMysteriesImage}
      gameUrl="https://cdn.htmlgames.com/RailwayMysteries/"
    />
  );
};

export default RailWayMysteries;