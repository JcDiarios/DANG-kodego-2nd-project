import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import DunkShotImage from "../games/img/Dunk Shot - 512x512.jpg"; // Include the appropriate file extension

const DunkShot = () => {
  return (
    <GamePreview
      imageUrl={DunkShotImage}
      gameUrl="https://html5.gamedistribution.com/5200582ee73a42ac996470cdded181fb/?gd_sdk_referrer_url=https://gamedistribution.com/games/dunk-shot-3"
    />
  );
};

export default DunkShot;