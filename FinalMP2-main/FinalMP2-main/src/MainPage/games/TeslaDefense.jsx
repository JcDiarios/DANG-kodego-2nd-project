import React from 'react';
import GamePreview from '../MainComponent/gamePreview'; // Ensure the component filename matches
import TeslaDefenseImage from '../games/gameimg/tesladefense300200.webp'; // Include the appropriate file extension

const TeslaDefense = () => {
  return (
    <GamePreview
      name="Tesla Defense"
      imageUrl={TeslaDefenseImage}
      gameUrl="https://cdn.htmlgames.com/TeslaDefense/" // Replace with the actual URL of TeslaDefense
    />
  );
};

export default TeslaDefense;
