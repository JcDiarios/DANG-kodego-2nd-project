import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import WeaveLineImage from "../games/gameimg/weavelines300200.webp"; // Include the appropriate file extension

const WeaveLine = () => {
  return (
    <GamePreview
      imageUrl={WeaveLineImage}
      gameUrl="https://cdn.htmlgames.com/WeaveLines/"
    />
  );
};

export default WeaveLine;