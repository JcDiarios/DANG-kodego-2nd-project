import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import RescueRangersImage from "../games/gameimg/Rescue Rangers - 512x340.jpeg"; // Include the appropriate file extension

const RescueRangers = () => {
  return (
    <GamePreview
    name="Rescue Rangers"
    imageUrl={RescueRangersImage}
    gameUrl="https://html5.gamedistribution.com/fdf4ef64d7e84e0780be6fc6802fa4a8/?gd_sdk_referrer_url=https://gamedistribution.com/games/rescue-rangers"
    />
  );
};

export default RescueRangers;
