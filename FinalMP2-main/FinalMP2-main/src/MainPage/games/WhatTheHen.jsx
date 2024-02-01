import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import WhatTheHenImage from "../games/gameimg/What The Hen! - 512x340.jpeg"; // Include the appropriate file extension

const WhatTheHen = () => {
  return (
    <GamePreview
    name="What The Hen!"
    imageUrl={WhatTheHenImage}
    gameUrl="https://html5.gamedistribution.com/1893ac95570b47399c59263cf23b7306/?gd_sdk_referrer_url=https://gamedistribution.com/games/what-the-hen"
    />
  );
};

export default WhatTheHen;
