import React from 'react';
import backgroundVideo from '../../assets/vid2.mp4';
import BlogSection from './BlogSection.jsx';
import FacebookChat from './LandingComponents/FacebookChat.jsx';
import Footer from './LandingComponents/Footer';
import Hero from './LandingComponents/Hero';
import HeroSection from './LandingComponents/HeroSection.jsx';
import Joke from './LandingComponents/Joke.jsx';
import NavigationBar from './LandingComponents/NavigationBar.jsx';
import WhatWeDo from './LandingComponents/WhatWeDo.jsx';


const LLayout = () => {
 
  return (
    
    <div className='relative h-screen'>
      
      <video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover'>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='dark:bg-black dark:bg-opacity-50 absolute inset-0'></div>
      <div className='relative z-10'>
        <NavigationBar className="p-0" />
        <Hero className="p-0" />
        <WhatWeDo />
        <BlogSection />
        <FacebookChat/>
        <HeroSection className="p-0" />
        <Joke/>
        <Footer className="p-0" /> 
      </div>
      </div>
    // </div>
  );
};

export default LLayout;
