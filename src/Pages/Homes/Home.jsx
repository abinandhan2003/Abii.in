import React, { useEffect } from 'react';
import Hero from './Asserts/Hero';
import Image from './Asserts/Image';
import About from './Asserts/About';
import Projects from './Asserts/Projects';
import Skills from './Asserts/Skills';
import Contact from './Asserts/Contact';
import './Home.css';

function Home() {

  useEffect(() => {
    const sections = document.querySelectorAll('#section');
    const handleScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    };

    sections.forEach(section => {
      section.addEventListener('click', handleScroll);
    });

    return () => {
      sections.forEach(section => {
        section.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className='scroll scroll-smooth overflow-hidden'>

      <div id='hero-section'>
        <Hero />
      </div>

      <div id='image-section'>
        <Image />
      </div>

      <div id='about-section'>
        <About />
      </div>

      <div id='projects-section' className='overflow-hidden'>
        <Projects />
      </div>

      <div id='skills-section'>
        <Skills />
      </div>

      <div id='contact-section'>
        <Contact />
      </div>

      <div className="sticky lg:right-64 md:right-32 flex justify-center w-full md:w-auto bottom-0 md:translate-x-72 translate-x-0">
        <div className="w-72 h-16 bg-gray-200 flex justify-evenly items-center">

          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/abi-web-nandhan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Abi Nandhan's LinkedIn Profile"
            title="LinkedIn - Abi Nandhan"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" role="img" aria-hidden="true">
              <path d="M100.28 448H7.4V149.1h92.88zm-46.44-344.44C24.09 103.56 0 79.44 0 48.22 0 17 24.09-7 53.84-7c29.74 0 53.84 24 53.84 55.22 0 31.22-24.1 55.34-53.84 55.34zm394.16 344.44h-92.68v-189.4c0-45.2-16.09-76-56.34-76-30.78 0-49.1 20.68-57.14 40.58-2.93 7.14-3.66 17-3.66 26.94v198.9h-92.74s1.24-322.94 0-356.9h92.68v50.68c12.34-19 34.58-46 84-46 61.2 0 107.14 40 107.14 125.94V448z" />
            </svg>
          </a>

          {/* Instagram Profile */}
          <a
            href="https://www.instagram.com/a.b.i_an/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Abi Nandhan's Instagram Profile"
            title="Instagram - Abi Nandhan"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" role="img" aria-hidden="true">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9 0 63.6 51.3 114.9 114.9 114.9 63.6 0 114.9-51.3 114.9-114.9 0-63.6-51.3-114.9-114.9-114.9zm0 186.6c-39.5 0-71.7-32.2-71.7-71.7 0-39.5 32.2-71.7 71.7-71.7 39.5 0 71.7 32.2 71.7 71.7 0 39.5-32.2 71.7-71.7 71.7zm146.4-194.3c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.4-36.2-93.8s-58.1-34.5-93.8-36.2c-37-2.1-147.9-2.1-184.9 0-35.7 1.7-67.4 9.9-93.8 36.2s-34.5 58.1-36.2 93.8c-2.1 37-2.1 147.9 0 184.9 1.7 35.7 9.9 67.4 36.2 93.8s58.1 34.5 93.8 36.2c37 2.1 147.9 2.1 184.9 0 35.7-1.7 67.4-9.9 93.8-36.2s34.5-58.1 36.2-93.8c2.1-37 2.1-147.9 0-184.9z" />
            </svg>
          </a>

          {/* Twitter Profile */}
          <a
            href="https://x.com/Abiweb001"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Abi Nandhan's Twitter Profile"
            title="Twitter - Abi Nandhan"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="35" height="35" className="mt-1" role="img" aria-hidden="true">
              <path d="M459.4 151.7c.3 2.8.3 5.6.3 8.5 0 87-66.2 187.3-187.3 187.3-37.2 0-71.9-10.9-101-29.4 5.3.6 10.4.8 15.9.8 30.7 0 59-10.5 81.5-28.2-28.7-.6-52.8-19.6-61.1-45.6 4 0 8 .3 12 .3 5.9 0 11.6-.8 17-2.2-30-6-52.6-32.6-52.6-64.7v-.8c8.8 4.9 19 7.8 29.8 8.2-18.4-12.3-30.3-33.4-30.3-57.3 0-12.6 3.4-24.4 9.4-34.6 34.1 41.7 85 69.3 142.5 72.1-1.2-5-1.8-10.2-1.8-15.4 0-37.7 30.7-68.4 68.4-68.4 19.7 0 37.4 8.3 49.9 21.5 15.5-3 30.1-8.8 43.3-16.6-5.1 15.8-15.8 29-29.7 37.4 13.8-1.5 27-5.3 39.2-10.6-9.2 13.7-20.9 25.8-34.4 35.4z" />
            </svg>
          </a>

          {/* Phone Contact */}
          <a
            href="tel:+919092312162"
            aria-label="Call Abi Nandhan"
            title="Call Abi Nandhan"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" role="img" aria-hidden="true">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
          </a>

        </div>
      </div>

    </div>
  );
}

export default Home;
