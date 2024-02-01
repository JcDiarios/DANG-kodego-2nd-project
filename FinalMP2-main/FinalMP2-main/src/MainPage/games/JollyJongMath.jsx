import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import JollyJongMathImage from "../games/gameimg/jollyjongmath300200.webp"; // Include the appropriate file extension

const JollyJongMath = () => {
  return (
    <GamePreview
      imageUrl={JollyJongMathImage}
      gameUrl="https://cdn.htmlgames.com/JollyJongMath/"
    />
  );
};

export default JollyJongMath;