import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiAltiumdesigner, SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiCss3Line } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { LiaWordpressSimple } from "react-icons/lia";

import React from "react";
import { motion } from "framer-motion";

// --- Updated Tech Card ---
const TechCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="relative flex flex-col justify-center gap-2 items-center bg-[#e2e1e1]/90 w-full md:w-58 h-40 p-4 rounded-2xl border border-[#c0c0c0]/70 
                 shadow-sm hover:shadow-lg duration-300 group overflow-hidden"
    >
      {/* Subtle Glow Border Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#07464333] to-[#07464311] rounded-2xl blur-[2px]"></div>

      {/* Icon Container */}
      <div className="relative flex justify-center items-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#D5D5D5] to-[#e8e8e8] shadow-inner group-hover:shadow-md">
        <Icon className="text-[#074643] text-3xl group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Title */}
      <h1 className="text-[#074643] text-lg sm:text-xl font-semibold mt-1 tracking-wide">
        {title}
      </h1>

      {/* Description */}
      <p className="text-[#074643]/90 text-sm text-center leading-snug px-1">
        {description}
      </p>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#07464355] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="flex justify-center items-center w-full h-auto lg:h-screen bg-[#fff] rounded-bl-[100px] md:rounded-bl-[300px] py-8 px-2 mb-5">
      <div className="flex flex-col w-full sm:w-[1000px] h-auto p-2">
        {/* Title Section */}
        <h1 className="text-4xl text-[#535353] flex justify-center sm:justify-start">
          <span className="font-bold">MY</span>&nbsp;SKILLS
        </h1>
        <h2 className="text-[#1E1E1E] text-md sm:text-lg mb-4 flex justify-center sm:justify-start">
          What I can do
        </h2>

        {/* Skill Grid */}
        <motion.div
          className="w-full h-full p-1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <TechCard
              icon={BiLogoMongodb}
              title="MongoDB"
              description="Stores application data in flexible structures."
            />
            <TechCard
              icon={SiExpress}
              title="Express"
              description="Handles routing and server-side logic efficiently."
            />
            <TechCard
              icon={FaReact}
              title="React"
              description="Manages the front-end view layer with reusable UI."
            />
            <TechCard
              icon={GrNode}
              title="Node.js"
              description="Runs JavaScript on the server side for scalability."
            />
            <TechCard
              icon={AiOutlineHtml5}
              title="HTML"
              description="Crafts clean and semantic web structure."
            />
            <TechCard
              icon={RiCss3Line}
              title="CSS"
              description="Designs responsive and stylish layouts with Tailwind."
            />
            <TechCard
              icon={IoLogoJavascript}
              title="JavaScript"
              description="Builds interactivity and core front-end logic."
            />
            <TechCard
              icon={BiLogoTypescript}
              title="TypeScript"
              description="Adds type safety and scalability to JavaScript apps."
            />
            <TechCard
              icon={SiAltiumdesigner}
              title="UX/UI Designer"
              description="Designs engaging interfaces using Figma & Adobe XD."
            />
            <TechCard
              icon={SiMysql}
              title="MySQL"
              description="Designs and manages structured relational databases."
            />
            <TechCard
              icon={LiaWordpressSimple}
              title="WordPress"
              description="Builds dynamic, responsive, and SEO-optimized sites."
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
