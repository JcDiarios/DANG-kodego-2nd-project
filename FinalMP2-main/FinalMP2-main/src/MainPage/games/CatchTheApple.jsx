import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CatchTheAppleImage from "../games/gameimg/Catch the Apple - 512x340.jpg"; // Include the appropriate file extension

const CatchTheApple = () => {
  return (
    <GamePreview
      name="Catch The Apple"
      imageUrl={CatchTheAppleImage}
      gameUrl="https://html5.gamedistribution.com/dc9a0990bd2942e78fb2e5eae57473b6/?gd_sdk_referrer_url=https://gamedistribution.com/games/catch-the-apple-3"
    />
  );
};

export default CatchTheApple;
