import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <>
      {/* SEO Metadata for better search indexing */}
      <head>
        <title>Abi Nandhan | Portfolio</title>
        <meta name="description" content="Abi Nandhan - Frontend React Developer | Portfolio showcasing projects, skills, and experience." />
        <meta name="keywords" content="Abi Nandhan, frontend developer, React developer, portfolio, web development" />
        <meta name="author" content="Abi Nandhan" />

        {/* Open Graph Metadata for social media sharing */}
        <meta property="og:title" content="Abi Nandhan | Frontend React Developer" />
        <meta property="og:description" content="Explore Abi Nandhan’s portfolio showcasing web development skills, projects, and experience." />
        <meta property="og:image" content="https://surli.cc/nnbptz" />
        <meta property="og:url" content="https://abii.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abi Nandhan | Frontend Developer" />
        <meta name="twitter:description" content="Portfolio of Abi Nandhan, a frontend React developer." />
        <meta name="twitter:image" content="https://x.com/abiwebdev003/photo" />

        {/* Structured Data for better Google search ranking */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abi Nandhan",
            "jobTitle": "Frontend React Developer",
            "url": "https://abii.in/",
            "sameAs": [
              "https://www.linkedin.com/in/abi-web-nandhan/",
              "https://github.com/abinandhan2003",
              "https://x.com/abiwebdev003",
              "https://surli.cc/nnbptz"
            ]
          })}
        </script>
      </head>

      <header className='w-full flex-wrap flex justify-between items-center px-4 py-2'>
        {/* SEO-friendly H1 tag */}
        <h1 className='text-lg text-black hover:font-bold bg-white transition-all duration-500'>
          Abi Nandhan
        </h1>

        <div className='md:hidden' id='swap'>
          <Link to={location.pathname === '/resume' ? '/' : '/resume'}>
            {location.pathname === '/resume' ? 'Home' : 'Resume'}
          </Link>
        </div>

        <nav className='hidden md:flex gap-5'>
          <a href="/" className='text-black hover:font-semibold transition-all duration-500 text-lg'>
            <div>Home</div>
          </a>
          <a href="/#about" className='text-black hover:font-semibold transition-all duration-500 text-lg'>
            <div>About</div>
          </a>
          <a href="/#project" className='text-black hover:font-semibold transition-all duration-500 text-lg'>
            <div>Project</div>
          </a>
          <a href="/#skills" className='text-black hover:font-semibold transition-all duration-500 text-lg'>
            <div>Skills</div>
          </a>
          <a href="/resume" className='text-black hover:font-semibold transition-all duration-500 text-lg'>
            <div>Resume</div>
          </a>
          <a href="/#contact" className='text-black hover:font-semibold transition-all duration-500 text-lg'>
            <div>Contact</div>
          </a>
        </nav>
      </header>

      {/* SEO-friendly Footer */}
      {/* <footer className="text-center text-gray-600 text-sm py-4">
        © {new Date().getFullYear()} Abi Nandhan | Frontend React Developer
      </footer> */}
    </>
  );
}

export default Header;
