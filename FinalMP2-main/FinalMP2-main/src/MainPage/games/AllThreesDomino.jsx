import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import AllThreesDominoImage from "../games/gameimg/allthreesdomino300200.webp"; // Include the appropriate file extension

const AllThreesDomino = () => {
  return (
    <GamePreview
      imageUrl={AllThreesDominoImage}
      gameUrl="https://cdn.htmlgames.com/AllThreesDomino/"
    />
  );
};

export default AllThreesDomino;