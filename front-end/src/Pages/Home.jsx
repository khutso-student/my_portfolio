import PROFILE from '../assets/PROFILE.png';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';


import { BiShapeSquare } from "react-icons/bi";


export default function Home() {

    const controls = useAnimation();
    const ref = useRef(null);

    const handleMouseEnter = () => {
      controls.start({
        rotate: 360,
        transition: {
          repeat: Infinity,
          duration: 5,
          ease: 'linear',
        },
      });
    };

    const handleMouseLeave = () => {
      controls.stop(); // stops animation
      controls.set({ rotate: 0 }); // reset rotation
    };


    return(
        <main className="relative flex flex-col justify-center items-center w-full h-screen bg-[#1A1A1A] rounded-br-[150px] md:rounded-br-[300px] mb-5">

            <motion.div className='flex justify-center items-center w-70 sm:w-90 h-auto mb-2'
                              ref={ref}
                                                    initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 2 }}
                      transition={{ delay: 0.6 }}
                
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  animate={controls}>
                <img src={PROFILE} alt="" className='w-90' />
            </motion.div>

            <h1 className='text-white text-2xl sm:text-5xl font-bold mb-2'>
                SOFTWARE <span></span>
                <span className='font-light'>
                    DEVELOPER
                </span>
            </h1>
            <h1 className='text-white  text-xl sm:text-2xl mb-1'>
                KHUTSO MAKUNYANE
            </h1>

            <h2 className='text-white'>
                 <Typewriter
                words={['Software Developer', 'Specializing in Full Stack MERN', 'UX/UI Designer']}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={200}
                deleteSpeed={80}
                delaySpeed={1000}
            />
                {/* I am a Full-Stack <span className='text-[#028BC5]'>MERN</span> Developer */}
            </h2>

            <BiShapeSquare  className='absolute bottom-2 left-4 text-[#212121] text-7xl animate-spin'/>
        </main>
    )
}