import React from 'react';
import ThreeDmahjongImage from "../games/gameimg/mahjong3d300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const ThreeDmahjong = () => {
  return (
    <GamePreview
      imageUrl={ThreeDmahjongImage}
      gameUrl="https://cdn.htmlgames.com/Mahjong3D/"
    />
  );
};

export default ThreeDmahjong;