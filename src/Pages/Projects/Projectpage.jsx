import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";

function Projectpage() {
    const project = [
      {
        title: "Background Remover",
        description: "Remove Image Backgrounds automatically in Seconds and for Free.",
        link: "https://removebg.abii.in/",
        image: require('../images/removebg.png') // Updated to use require for local image
      },
      {
        title: "Ai Chatbot",  
        description: "A creative and interactive project designed to improve user experience.",
        link: "https://lucy.abii.in/",
        image: require('../images/lucy.png') // Updated to use require for local image
      },
      {
        title: "Dark Hubs",
        description: "Free platform to download software and games.",
        link: "https://darkhubs.netlify.app/",
        image: require('../images/darkhub.png') // Updated to use require for local image
      },
      {
        title: "Weather Application",
        description: "A simple weather application that provides current weather information.",
        link: "https://abi-weather.netlify.app/",
        image: require('../images/weather.png') // Updated to use require for local image
      },
      {
        title: "A Games",
        description: "Online games platform. Only froontend.",
        link: "https://a-games.netlify.app/",
        image: require('../images/agames.png') // Updated to use require for local image
      },
      {
        title: "Sky Web",
        description: "My first tailwind project.",
        link: "https://skywebs.netlify.app/",
        image: require('../images/skyweb.png') // Updated to use require for local image
      }
    ];
    ;

    useEffect(() => {
            AOS.init();
          }, [])

  return (
    <div className="flex flex-col items-center bg-white min-h-screen py-12 px-4">
    <div className='text-3xl font-bold text-gray-800'>
      My projects
    </div>
    <div className='mb-16 mt-4 text-gray-600 text-center'>
      for project related queries contact <b>admin@abii.in</b>  <Link to="/projects" className="text-blue-600 hover:underline">projects page</Link>.
    </div>
    <div className="w-full max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow transition-all"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                View Details →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
     
    </div>
  </div>
  )
}

export default Projectpage
