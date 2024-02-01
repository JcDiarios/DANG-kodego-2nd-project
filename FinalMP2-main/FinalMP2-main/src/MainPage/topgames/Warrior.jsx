import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import WarriorImage from "../games/img/For Honor Warriors IO - 512x512.jpeg"; // Include the appropriate file extension

const Warrior = () => {
  return (
    <GamePreview
      imageUrl={WarriorImage}
      gameUrl="https://html5.gamedistribution.com/c23c547669904e348202fbba7f5f8306/?gd_sdk_referrer_url=https://gamedistribution.com/games/for-honor-warriors-io"
    />
  );
};

export default Warrior;