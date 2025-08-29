import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiCss3Line } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { SiAltiumdesigner } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { LiaWordpressSimple } from "react-icons/lia";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";


const TechCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col justify-center gap-1 items-center bg-[#e2e1e1] shadow-xs w-full md:w-58 h-35 p-2 rounded-lg hover:shadow-md duration-300 border border-[#c0c0c0]">
      <div className="flex justify-center text-[#585858] text-2xl items-center bg-[#D5D5D5] w-12 h-12 rounded-xl">
        <Icon />
      </div>
      <h1 className="text-[#074643] text-xl font-semibold">{title}</h1>
      <p className="text-[#074643] text-sm text-center">{description}</p>
    </div>
  );
};

export default function Skills() {
    return(
        <div className="flex justify-center items-center w-full h-auto lg:h-screen bg-[#fff] rounded-bl-[100px] md:rounded-bl-[300px] py-8 px-2 mb-5">
           <div className="flex flex-col     w-full sm:w-[1000px] h-auto p-2">
                <h1 className="text-4xl text-[#535353]  flex justify-center sm:justify-start">
                    <span className="font-bold">MY</span> SKILLS
                </h1>
                <h2 className="text-[#1E1E1E] text-md sm:text-lg mb-2 flex justify-center sm:justify-start">
                    What I can do
                </h2>

                <motion.div className="w-full  h-full p-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <TechCard
                        icon={BiLogoMongodb}
                        title="MongoDB"
                        description="Stores application data in flexible."
                        />

                        <TechCard
                        icon={SiExpress}
                        title="Express"
                        description="Handles routing and server-side logic."
                        />

                        <TechCard
                        icon={FaReact}
                        title="React"
                        description="Handles the front-end view layer."
                        />

                        <TechCard
                        icon={GrNode}
                        title="Node.js"
                        description="Allows running JavaScript on the server side."
                        />

                        <TechCard
                        icon={AiOutlineHtml5}
                        title="HTML"
                        description="Craft semantic and Style responsive using Html & Css."
                        />

                        <TechCard
                        icon={RiCss3Line}
                        title="CSS"
                        description="Craft semantic and Style responsive using Html & Css."
                        />

                        <TechCard
                        icon={IoLogoJavascript}
                        title="JavaScript"
                        description="Building interactive front-end logic."
                        />

                        <TechCard
                        icon={BiLogoTypescript}
                        title="TypeScript"
                        description="Building interactive front-end logic."
                        />

                        <TechCard
                        icon={SiAltiumdesigner}
                        title="UX/UI Designer"
                        description="Deisgning interfaces using Figma and Adobe XD."
                        />

                        <TechCard
                        icon={SiMysql}
                        title="MYSQL"
                        description="Design and manage structured."
                        />

                        <TechCard
                        icon={LiaWordpressSimple}
                        title="WordPress"
                        description="Building dynamic, responsive, and SEO-optimized websites"
                        />

          
                    </div>
                </motion.div>
           </div>
        </div>
    )
}