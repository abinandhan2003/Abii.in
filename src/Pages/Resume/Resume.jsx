import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import Greatlogo from './Certificate/images.png';
import Udemylogo from './Certificate/pngwing.com.png';
import Microsoftlogo from './Certificate/pngwing.com (1).png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Resume() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='flex justify-center items-center mt-[5vh]'>

      <Helmet>
        <title>Abi Nandhan - React Developer | Resume</title>
        <meta name="description" content="Abi Nandhan is an experienced frontend React Developer specializing in responsive web applications with Tailwind CSS and JavaScript." />
        <meta name="keywords" content="React Developer, Frontend Developer, Web Development, Tailwind CSS, UI/UX, JavaScript, Resume" />
      </Helmet>

      <div className='md:w-[70%] w-[95%] mt-11'>

        {/* Resume Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold">Abi Nandhan</h1>
          <p>Chennai, India | <a href="mailto:abinandhan77@gmail.com" className="text-blue-400">abinandhan77@gmail.com</a></p>
        </header>


        <div className='flex justify-start' >

          <a href={require("../Cv/abi.pdf")} download="My_Resume.pdf" >
            <div className='px-5 py-2 flex gap-2 bg-black text-white rounded'> Download CV
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-white">
                <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
              </svg>
            </div>
          </a>

        </div>


        <body class="bg-gray-900 text-white font-mono p-8 mt-5 mb-5 rounded-md" data-aos="fade-up">
          <div class="max-w-3xl mx-auto">
            <header class="mb-8">
              <h1 class="text-3xl font-bold">Abi Nandhan</h1>
              <p>Chennai, India 600045 | 9092312162 | <a href="mailto:abinandhan77@gmail.com" class="text-blue-400">abinandhan77@gmail.com</a></p>
            </header>

            <section class="mb-8">
              <h2 class="text-xl font-bold">SUMMARY</h2>
              <p class="mt-2">Experienced Web Developer specializing in creating dynamic and responsive web applications using React JS and Tailwind CSS. Adept at building scalable front-end solutions with a strong focus on user experience and performance. Proficient in leveraging modern development tools and practices to deliver high-quality, maintainable code.</p>
            </section>

            <section class="mb-8">
              <h2 class="text-xl font-bold">SKILLS</h2>
              <ul class="list-disc list-inside mt-2">
                <li>Responsive design</li>
                <li>Tailwind CSS</li>
                <li>React Native</li>
                <li>Operating Systems (e.g., Windows, Linux)</li>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>MS Office</li>
                <li>UI/UX Design</li>
              </ul>
            </section>

            <section class="mb-8">
              <h2 class="text-xl font-bold">WORK HISTORY</h2>
              <div class="mt-2">
                <h3 class="text-lg font-semibold">Nexcap - Web, Mobile, and Desktop App Solutions</h3>
                <p class="text-sm">Frontend Developer | Vellore, India | March 2023 to Current</p>
                <ul class="list-disc list-inside mt-1">
                  <li>Enhanced user experience by optimizing web applications for maximum speed, scalability, and increased customer satisfaction.</li>
                  <li>Collaborated with back-end developers to improve website functionality and integrate new features.</li>
                  <li>Coded using Tailwind CSS and JavaScript to develop features for both mobile and desktop platforms.</li>
                </ul>
              </div>
            </section>

            <section class="mb-8">
              <h2 class="text-xl font-bold">EDUCATION</h2>
              <div class="mt-2">
                <h3 class="text-lg font-semibold">Bachelor of Engineering - Computer Science and Engineering</h3>
                <p class="text-sm">Dhanalakshmi College of Engineering | Chennai, India | Expected June 2025</p>
                <p class="text-sm">CGPA: 8.06</p>
              </div>
              <div class="mt-2">
                <h3 class="text-lg font-semibold">Higher Secondary Education</h3>
                <p class="text-sm">Kurinji Matriculation Higher Secondary School | Harur, India | May 2021</p>
                <p class="text-sm">Final Grade: 80%</p>
              </div>
            </section>

            <section class="mb-8">
              <h2 class="text-xl font-bold">CERTIFICATIONS</h2>
              <ul class="list-disc list-inside mt-2">
                <li>Web Design – IIT Delhi</li>
                <li>React JS – Great Learning</li>
                <li>CSS & JS – Udemy</li>
                <li>JavaScript – Great Learning</li>
              </ul>
            </section>

            <section class="mb-8">
              <h2 class="text-xl font-bold">HOBBIES</h2>
              <p class="mt-2">I love exploring new websites, discovering interesting technologies, and keeping up with the latest trends and news.</p>
            </section>

            <section>
              <h2 class="text-xl font-bold">PROFILES</h2>
              <ul class="list-disc list-inside mt-2">
                <li><a href="https://linkedin.com/in/abi-web-nandhan" class="text-blue-400">LinkedIn – linkedin.com/in/abi-web-nandhan</a></li>
                <li><a href="https://github.com/abinandhan2003" class="text-blue-400">GitHub – github.com/abinandhan2003</a></li>
              </ul>
            </section>
          </div>
        </body>

        <div className='flex justify-center' data-aos="fade-up" >

          <a href={require("../Cv/abi.pdf")} download="My_Resume.pdf">
            <div className='px-5 py-2 flex gap-2 bg-black text-white rounded'> Download CV
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-white">
                <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
              </svg>
            </div>
          </a>

        </div>

        {/* Certification  */}

        <div className='py-10'>
          <h1 className='text-4xl'>
            Certification
          </h1>

          <div className='flex justify-evenly flex-wrap gap-10 mt-10'>

            <div
              class="w-72 bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md"
              data-aos="fade-up" data-aos-duration="1000"
            >
              <p class="text-lg font-bold"> React Js</p>
              <div class="py-3">
                <p class="text-gray-400 text-sm">
                  Great Learning
                </p>
              </div>
              <div class="flex justify-end">

                <img src={Microsoftlogo} alt="Great_learning" className='w-16' />

              </div>
            </div>


            <div
              class="w-72 bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md"
              data-aos="fade-up" data-aos-duration="1000"
            >
              <p class="text-lg font-bold"> CSS & JS</p>
              <div class="py-3">
                <p class="text-gray-400 text-sm">
                  Udemy
                </p>
              </div>
              <div class="flex justify-end">

                <img src={Udemylogo} alt="Great_learning" className='w-14' />

              </div>
            </div>



            <div
              class="w-72 bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md"
              data-aos="fade-up" data-aos-duration="1000"
            >
              <p class="text-lg font-bold"> JavaScript </p>
              <div class="py-3">
                <p class="text-gray-400 text-sm">
                  Great Learning
                </p>
              </div>
              <div class="flex justify-end">

                <img src={Greatlogo} alt="Great_learning" className='w-7 rounded-full' />

              </div>
            </div>

            <div
              class="w-72 bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md"
              data-aos="fade-up" data-aos-duration="1000"
            >
              <p class="text-lg font-bold"> Web Design </p>
              <div class="py-3">
                <p class="text-gray-400 text-sm">
                  IIT Delhi
                </p>
              </div>
              <div class="flex justify-end">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7">
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                </svg>


              </div>
            </div>


            <div
              class="w-72 bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md"
              data-aos="fade-up" data-aos-duration="1000"
            >
              <p class="text-lg font-bold"> TailwindCSS </p>
              <div class="py-3">
                <p class="text-gray-400 text-sm">
                  Great Learning
                </p>
              </div>
              <div class="flex justify-end">

                <img src={Greatlogo} alt="Great_learning" className='w-7 rounded-full' />

              </div>
            </div>



          </div>



        </div>

      </div>
    </div>
  );
}

export default Resume;
