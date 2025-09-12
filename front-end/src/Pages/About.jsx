import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

import AboutBG from "../assets/AboutBG.png";
import { MdDownloading } from "react-icons/md";
import { MdOutlineDownloading } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

import Resume from '../assets/Resume.pdf';

const Details = ({ dot, label, value }) => {
  return (
    <div className="flex items-center text-[#1A1A1A] text-sm font-bold gap-2 w-full mb-1.5">
      <div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: dot || "#074643" }}
      ></div>
      <p>
        {label}: <span className="font-medium">{value}</span>
      </p>
    </div>
  );
};

export default function About() {
  const containerRef = useRef(null);
  const [model, setModel] = useState(false)

  // motion values
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // tilt effect
  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const px = mouseX / rect.width;
    const py = mouseY / rect.height;

    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <main className="flex justify-center items-center w-full h-auto lg:h-screen py-8 px-1 mb-3">
      <div className="flex flex-col sm:flex-row justify-center  gap-2  w-full sm:w-[1000px] h-auto p-2">
        {/* left */}
        <div className="flex flex-col w-full sm:w-120 h-auto sm:h-full ">
          <h1 className="text-4xl text-[#535353] mb-1 flex justify-center sm:justify-start">
            ABOUT <span className="font-bold">ME</span>
          </h1>

          <motion.h2
            className="text-[#1E1E1E] text-md md:text-lg mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Typewriter
              words={[
                "I am a Full-Stack MERN Developer",
                "UX/UI Designer",
                "Software Developer",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={200}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </motion.h2>

          <Details dot="#074643" label="Age" value="24" />
          <Details dot="#074643" label="Residence" value="South Africa" />
          <Details dot="#074643" label="Email" value="khutsomakunyane1@gmail.com" />
          <Details dot="#074643" label="Phone Number" value="064 857 1755" />

          {/* Image hover tilt */}
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative bg-transparent w-55 h-65 border-8 border-[#074643] mt-8 rounded-md mb-2 hidden justify-center items-center sm:flex "
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={AboutBG}
              alt="Profile"
              className="w-52 h-60 object-cover rounded-md ml-[30px] mt-[-30px]"
              style={{ transform: "translateZ(50px)" }} // makes it pop in 3D
            />
          </motion.div>
          
          <div className="flex items-center w-full gap-2 justify-center sm:justify-start mt-3 sm:mt-1">
            <button onClick={() => setModel(!model)}
            className="flex justify-center items-center gap-2 bg-[#074643] hover:bg-[#BDBDBD] text-white hover:text-[#1A1A1A] cursor-pointer text-sm px-2.5 py-2 rounded-md duration-300">
                <MdDownloading />
                Download Cv
            </button>

           <a href="#projects"
           className="flex justify-center items-center gap-2 bg-[#BDBDBD] hover:bg-[#074643] text-[#1A1A1A] hover:text-[#fff] cursor-pointer text-sm px-2.5 py-2 rounded-md duration-300">
            <RxDashboard />
            View Projects

           </a>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col w-full h-full  p-2">
            
            {[
            "I'm a dedicated Full-Stack MERN Developer, trained at the PowerLearn Project (PLP) Academy. With 2 years experience, I have mastered the MERN stack — MongoDB, Express.js, React, and Node.js.",
            "I also bring strong front-end skills in HTML, CSS, JavaScript, TypeScript and a solid grasp of MySQL and basic Python. I actively use Git and GitHub for version control and collaboration.",
            "Driven by curiosity and purpose, I focus on building efficient, maintainable, and scalable web applications that improve lives and solve problems. I specialize in building robust, user-friendly web applications and turning ideas into scalable digital solutions. With a strong foundation in both front-end and back-end development, I’ve built real-world projects that solve real-world problems. My work, portfolio and the passion can speak for me, let’s build the future, one line of code at a time.",
            "One of my most impactful projects to date is QueueCare — a smart queue and filing management system designed for healthcare facilities. It streamlines patient flow, reduces waiting times, and digitizes patient records, creating a smoother and more efficient experience for both patients and staff. QueueCare represents my passion for building solutions that directly address real-world challenges. And this is just the beginning — I’m continuously exploring new ideas and committed to building even more innovative projects that make a lasting impact."
            ].map((text, i) => (
            <motion.p
                key={i}
                className="text-[#1A1A1A] text-xs sm:text-sm font-medium mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.2 }}
                >
                {text}
            </motion.p>
            ))}

            <div className="flex items-center text-xl gap-2.5 w-full mt-2">
                <a href="https://github.com/khutso-student" target="_blank"><FaGithub className='text-[#074643] hover:text-[#1A1A1A]' /></a>
                <a href="https://www.linkedin.com/in/khutso-makunyane-5353b1329/" target="_blank"><FaLinkedinIn className='text-[#074643] hover:text-[#1A1A1A]' /></a>
                <a href="https://www.facebook.com/khutso.makunyane.2025/" target="_blank"><FaFacebookF className='text-[#074643] hover:text-[#1A1A1A]' /></a>
                <a href="https://www.instagram.com/mern_engineer" target="_blank"><FaInstagram className='text-[#074643] hover:text-[#1A1A1A]' /></a>
            </div>
        </div>
      </div>

       {model && (
                <motion.div
                    onClick={() => setModel(false)}
                    className="fixed top-0 left-0 w-full h-full bg-[#00000085] flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
   
                    >
                    <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex flex-col justify-center items-center gap-3 bg-[#032220] w-80 p-5 rounded-md border-2 border-[#074643] shadow-lg"
                       initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                   >
                    <p className="text-gray-300 text-sm mb-3">Download Cv</p>

                    <div className="flex justify-center items-center gap-3 w-full">
                        {/* MERN CV */}
                        <a
                        href={Resume}
                        download="Khutso_Resume.pdf"
                        className="flex items-center gap-2 bg-[#074643] hover:bg-[#fff] text-gray-100 hover:text-black text-sm px-6 py-2 rounded-md duration-300"
                        >
                        <MdOutlineDownloading size={18} />
                        Resume
                        </a>
                    </div>
                    </div>
                </motion.div>
                )}
    </main>
  );
}
