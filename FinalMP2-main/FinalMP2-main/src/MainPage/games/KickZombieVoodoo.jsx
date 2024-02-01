import React from 'react';
import GamePreview from "../MainComponent/gamePreview"; // Make sure the component filename matches
import KickZombieVoodooImage from "../games/gameimg/Kick Zombie Voodoo - 512x340.jpg"; // Include the appropriate file extension

const KickZombieVoodoo = () => {
  return (
    <GamePreview
    name="Kick Zombie Voodoo"
    imageUrl={KickZombieVoodooImage}
    gameUrl="https://html5.gamedistribution.com/dd9c630557ca4c568d28db1a08bab8f4/?gd_sdk_referrer_url=https://gamedistribution.com/games/kick-zombie-voodoo"
    />
  );
};

export default KickZombieVoodoo;