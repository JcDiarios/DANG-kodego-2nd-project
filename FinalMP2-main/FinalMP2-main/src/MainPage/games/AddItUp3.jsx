import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import AddItUp3Image from "../games/gameimg/additup3300.webp"; // Include the appropriate file extension

const AddItUp3 = () => {
  return (
    <GamePreview
      imageUrl={AddItUp3Image}
      gameUrl="https://cdn.htmlgames.com/AddItUp3/"
    />
  );
};

export default AddItUp3;