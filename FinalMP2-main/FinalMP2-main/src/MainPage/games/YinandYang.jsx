import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import YinandYangImage from "../games/gameimg/yinandyang300200.webp"; // Include the appropriate file extension

const YinandYang = () => {
  return (
    <GamePreview
      imageUrl={YinandYangImage}
      gameUrl="https://cdn.htmlgames.com/YinAndYang/"
    />
  );
};

export default YinandYang;