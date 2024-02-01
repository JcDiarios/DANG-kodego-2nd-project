import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import ZooAnimalsImage from "../games/gameimg/zooanimals300200.webp"; // Include the appropriate file extension

const ZooAnimals = () => {
  return (
    <GamePreview
      imageUrl={ZooAnimalsImage}
      gameUrl="https://cdn.htmlgames.com/ZooAnimals/"
    />
  );
};

export default ZooAnimals;