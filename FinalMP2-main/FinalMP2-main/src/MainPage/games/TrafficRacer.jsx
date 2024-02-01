import React from 'react';
import GamePreview from '../MainComponent/gamePreview';
import TrafficRacerImage from '../games/gameimg/trafficracer2300200.webp'; // Import the image

const TrafficRacer = () => {
  return (
    <GamePreview
      name="Traffic Racer"
      imageUrl={TrafficRacerImage} // Use the imported image
      gameUrl="https://cdn.htmlgames.com/TrafficRacer2/"
    />
  );
};

export default TrafficRacer;
