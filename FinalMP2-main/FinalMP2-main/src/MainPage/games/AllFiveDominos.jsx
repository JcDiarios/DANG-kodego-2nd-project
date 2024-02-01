import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import AllFiveDominosImage from "../games/gameimg/allfivesdomino300200.webp"; // Include the appropriate file extension

const AllFiveDominos = () => {
  return (
    <GamePreview
      imageUrl={AllFiveDominosImage}
      gameUrl="https://cdn.htmlgames.com/AllFivesDomino/"
    />
  );
};

export default AllFiveDominos;