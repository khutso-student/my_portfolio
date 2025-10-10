import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import Design from "../component/Design";

import worksync from "../assets/worksync.png";
import Que from "../assets/Que.png";
import QueFiling from "../assets/QueFiling.png";
import WisePrice from "../assets/WisePrice.png";
import SmartBiz from "../assets/SmartBiz.png";
import Vibe from "../assets/Vibe.png";

const ProjectCard = ({ image, title, demoLink, githubLink, category, index }) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col bg-[#121212] border border-[#2d2d2d] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#0a473f]/40 hover:border-[#0a473f] transition-all duration-300">
        {/* Image */}
        <div
          className="w-full h-40 sm:h-48 md:h-56 bg-cover bg-center relative group"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 justify-center gap-3">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#074643] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#0b6c61] transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#222222] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#333333] transition"
              >
                <FaGithub /> GitHub
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col px-4 py-3">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-white font-semibold text-base">{title}</h2>
            <span className="text-[#0a473f] text-xs font-bold">{index}</span>
          </div>
          <p className="text-[#bbbbbb] text-sm mb-2">{category}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="flex justify-center items-center w-full pt-20 pb-10 px-3">
      <div className="flex flex-col w-full max-w-5xl">
        {/* Heading */}
        <h1 className="text-4xl text-white font-bold mb-1 text-center sm:text-left">
          MY <span className="text-[#0a473f]">PROJECTS</span>
        </h1>
        <p className="text-[#bbb] text-sm sm:text-base mb-5 text-center sm:text-left">
          What I’ve built and designed with passion
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap justify-center sm:justify-start">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-5 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
              activeTab === "projects"
                ? "bg-[#0a473f] text-white"
                : "bg-[#1e1e1e] text-white hover:bg-[#0a473f]/60"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("designs")}
            className={`px-5 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
              activeTab === "designs"
                ? "bg-[#0a473f] text-white"
                : "bg-[#1e1e1e] text-white hover:bg-[#0a473f]/60"
            }`}
          >
            Designs
          </button>
        </div>

        {/* Content */}
        <div className="w-full">
          {activeTab === "projects" && (
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <ProjectCard
                image={Que}
                title="QueueCare"
                demoLink="https://queue-care-swart.vercel.app/"
                githubLink="https://github.com/khutso-student?tab=repositories"
                category="Software"
                index="01"
              />
              <ProjectCard
                image={QueFiling}
                title="QueueCare Filing"
                demoLink="https://queue-care-filing.vercel.app/"
                githubLink="https://github.com/khutso-student?tab=repositories"
                category="Software"
                index="02"
              />
              <ProjectCard
                image={Vibe}
                title="VibeConnect"
                demoLink="https://vibeconnect-seven.vercel.app/"
                githubLink="https://github.com/khutso-student?tab=repositories"
                category="Software"
                index="03"
              />
              <ProjectCard
                image={worksync}
                title="WorkSync"
                demoLink="https://work-sync-nine.vercel.app/"
                githubLink="https://github.com/khutso-student?tab=repositories"
                category="Software"
                index="04"
              />
              <ProjectCard
                image={WisePrice}
                title="Wise ShopKeeper"
                demoLink="https://price-wise-shopkeeper.vercel.app/"
                githubLink="https://github.com/khutso-student?tab=repositories"
                category="Software"
                index="05"
              />
              <ProjectCard
                image={SmartBiz}
                title="SmartBiz Digital"
                demoLink="https://www.smartbizdigital.co.za/"
                category="Website Live"
                index="06"
              />
            </motion.div>
          )}

          {activeTab === "designs" && (
            <div className="w-full">
              <Design />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
