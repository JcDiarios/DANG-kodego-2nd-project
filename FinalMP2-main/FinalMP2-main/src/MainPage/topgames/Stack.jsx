import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import StackImage from "../games/img/Stack - 512x512.jpg"; // Include the appropriate file extension

const Stack = () => {
  return (
    <GamePreview
      imageUrl={StackImage}
      gameUrl="https://html5.gamedistribution.com/282636e45a99479897f4cc6dae83e27b/?gd_sdk_referrer_url=https://gamedistribution.com/games/stack"
    />
  );
};

export default Stack;