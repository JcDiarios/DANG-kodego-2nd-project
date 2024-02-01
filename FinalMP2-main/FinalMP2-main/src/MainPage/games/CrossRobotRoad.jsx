import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import CrossRobotRoadImage from "../games/gameimg/robotcrossroad300200.webp"; // Include the appropriate file extension

const CrossRobotRoad = () => {
  return (
    <GamePreview
      imageUrl={CrossRobotRoadImage}
      gameUrl="https://cdn.htmlgames.com/RobotCrossRoad/"
    />
  );
};

export default CrossRobotRoad;