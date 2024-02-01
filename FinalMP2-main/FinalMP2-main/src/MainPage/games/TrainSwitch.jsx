import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import TrainSwitchImage from "../games/gameimg/trainswitch300200.webp"; // Include the appropriate file extension

const TrainSwitch = () => {
  return (
    <GamePreview
      imageUrl={TrainSwitchImage}
      gameUrl="https://cdn.htmlgames.com/TrainSwitch/"
    />
  );
};

export default TrainSwitch;