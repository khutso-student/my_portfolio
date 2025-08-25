import { useState } from 'react';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import WorkCarousel from '../component/WorkCarousel';

import BUT from '../assets/BUT.svg';
import LOGO from '../assets/LOGO.png';
import Tech from '../assets/Tech.jpg';

export default function MainPage() {
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <main className="flex flex-col w-full h-screen">
      {/* Toggle button */}
      <button
        onClick={() => setSideOpen(prev => !prev)}
        className="fixed top-5 right-5 z-20 bg-[#1A1A1A] border border-white cursor-pointer p-2 duration-300 hover:rotate-90 rounded-full "
      >
        {sideOpen 
            ? <img src={BUT} alt="close button" className="w-8 h-8 duration-300" />
            : <img src={BUT} alt="open button" className="w-8 h-8 rotate-90 duration-300" />
            }
      </button>

      {/* Side nav */}
      <div
        className={` fixed left-5 top-1/2 transform -translate-y-1/2 
        bg-[#1a1a1af5] border border-white rounded-full z-40 
        overflow-hidden transition-all duration-500 ease-in-out h-150 flex flex-col justify-between items-center p-2
        ${sideOpen ? 'w-30  opacity-100' : 'w-0  opacity-0'}`}
      >
        <img src={LOGO} alt="" className='w-12 mt-5 animate-bounce' />

        <div className='flex flex-col justify-center  text-white gap-2 w-full h-auto pl-4'>
            <a href="#home"
                className="cursor-pointer hover:text-gray-400">HOME
            </a>

            <a href="#about"
                className="cursor-pointer hover:text-gray-400">ABOUT
            </a>

            <a href="#skills"
                className="cursor-pointer hover:text-gray-400">SKILLS
            </a>

            <a href="#projects"
                className="cursor-pointer hover:text-gray-400">PROJECTS
            </a>

            <a href="#contact"
                className="cursor-pointer hover:text-gray-400">CONTACT
            </a>
        </div>

        <div>

        </div>
       
      </div>

      {/* Sections */}
      <div id="home" className="bg-white h-auto lg:h-screen">
        <Home />
      </div>
      <div id="about" className="w-full h-auto lg:h-screen">
        <About />
      </div>
      <div id="skills" className="w-full h-auto lg:h-screen bg-[#1A1A1A] ">
        <Skills />
      </div>
    <div
      className="w-full h-auto bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${Tech})` }}>
        <WorkCarousel />
    </div>

      <div id="projects" className="w-full h-auto lg:h-full bg-[#1A1A1A]">
        <Projects />
      </div>
      <div id="contact" className="w-full h-auto lg:h-full bg-[#1A1A1A]">
        <Contact />
      </div>
    </main>
  );
}
