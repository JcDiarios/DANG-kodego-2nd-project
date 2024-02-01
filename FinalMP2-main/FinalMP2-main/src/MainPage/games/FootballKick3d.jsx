import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import FootballKick3dImage from "../games/gameimg/Football Kick 3D - 512x340.jpeg"; // Include the appropriate file extension

const FootballKick3d = () => {
  return (
    <GamePreview
    name="Vex 8"
    imageUrl={FootballKick3dImage}
    gameUrl="https://html5.gamedistribution.com/cb61f4e0caa94e829c4a7c25e4192b03/?gd_sdk_referrer_url=https://gamedistribution.com/games/football-kick-3d"
    />
  );
};

export default FootballKick3d;