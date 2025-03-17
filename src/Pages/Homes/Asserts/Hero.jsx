import React, { useState, useEffect } from 'react';
import logo from './Logo.svg';

function Hero() {
  const [scale, setScale] = useState(1);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.max(1 - scrollY / 500, 0.5); // Prevent scaling below 50%

      if (newScale !== scale) setScale(newScale);
      setIsFixed(scrollY > 200); // Fix logo position after scrolling 200px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scale]);

  return (
    <section className='w-full h-[100vh] flex flex-col justify-center mt-20 items-center text-center'>
      {/* SEO-Friendly H1 */}
      <h1 className='sr-only'>Abi Nandhan - Frontend React Developer Portfolio</h1>

      {/* Animated Logo */}
      <img
        src={logo}
        alt="Abi Nandhan Portfolio Logo - A symbol of creativity and passion"
        className='z-50'
        style={{
          transform: isFixed ? 'translateY(-47%) translateX(-50%) scale(0.1)' : `scale(${scale})`,
          position: isFixed ? 'fixed' : 'relative',
          top: isFixed ? '10px' : 'auto',
          left: isFixed ? '50%' : 'auto',
          transition: 'transform 0.2s, top 0.2s, left 0.2s'
        }}
      />

      {/* Hero Section Text */}
      <p
        className='md:text-5xl text-3xl -translate-y-10 text-gray-600 mb-32'
        style={{ transform: `scale(${scale})`, transition: 'transform 0.2s' }}
      >
        Explore inside my portfolio and see where <br /> creativity meets passion.
      </p>

      {/* Scroll Indicator */}
      <div className='flex gap-5 justify-center items-center -translate-y-28'>
        <div className='animate-bounce'>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Scroll Down Indicator"
          >
            <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"></path>
          </svg>
        </div>
        <p className='text-gray-600'>SCROLL DOWN</p>
      </div>
    </section>
  );
}

export default Hero;
