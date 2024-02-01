import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import FireBoyAndWaterGirlImage from "../games/gameimg/Fireboy & Watergirl 6_ Fairy Tales - 512x340.jpeg"; // Include the appropriate file extension

const FireBoyAndWaterGirl = () => {
  return (
    <GamePreview
    name="Fireboy & Watergirl 6"
    imageUrl={FireBoyAndWaterGirlImage}
    gameUrl="https://html5.gamedistribution.com/56da8a54fe204845b34ccff750d4a60b/?gd_sdk_referrer_url=https://gamedistribution.com/games/fireboy-watergirl-6-fairy-tales"
    />
  );
};

export default FireBoyAndWaterGirl;
