import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import XiangqiImage from "../games/gameimg/xiangqi300200.webp"; // Include the appropriate file extension

const Xiangqi = () => {
  return (
    <GamePreview
      imageUrl={XiangqiImage}
      gameUrl="https://cdn.htmlgames.com/Xiangqi/"
    />
  );
};

export default Xiangqi;