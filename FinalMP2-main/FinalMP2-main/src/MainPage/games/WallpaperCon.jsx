import React from 'react';
import WallpaperConImage from "../games/gameimg/wallpaperconnect300200.webp"; // Include the appropriate file extension
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches

const WallpaperCon = () => {
  return (
    <GamePreview
      imageUrl={WallpaperConImage}
      gameUrl="https://cdn.htmlgames.com/WallpaperConnect/"
    />
  );
};

export default WallpaperCon;