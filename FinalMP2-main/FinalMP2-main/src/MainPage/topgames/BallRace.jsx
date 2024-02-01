import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import BallRaceImage from "../games/img/Balls Race - 512x512.jpg"; // Include the appropriate file extension

const BallRace = () => {
  return (
    <GamePreview
      imageUrl={BallRaceImage}
      gameUrl="https://html5.gamedistribution.com/af7929c0c4ff49809e1ef448bd5cdc1f/?gd_sdk_referrer_url=https://gamedistribution.com/games/balls-race"
    />
  );
};

export default BallRace;