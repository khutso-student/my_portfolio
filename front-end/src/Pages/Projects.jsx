import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import Design from '../component/Design';
import { motion, useMotionValue, useTransform } from 'framer-motion';

import worksync from '../assets/worksync.png';
import Que from '../assets/Que.png';
import QueFiling from '../assets/QueFiling.png';
import WisePrice from '../assets/WisePrice.png';
import SmartBiz from '../assets/SmartBiz.png';
import Vibe from '../assets/Vibe.png';

const ProjectCard = ({ image, title, demoLink, githubLink, category, index }) => {
    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="flex flex-col bg-[#171717] w-full h-auto border border-[#52555e] rounded-lg p-2 hover:shadow-md hover:shadow-[#52555e]/30 transition-shadow duration-300">
                <div className="w-full h-36 sm:h-40 md:h-48 bg-[#3A3C43] rounded-md mb-2 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}/>
                <div className="flex justify-between items-center w-full mb-1">
                    <p className="text-white text-sm">{title}</p>
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#292929] hover:bg-[#474747] text-xs text-white px-4 py-2 rounded-md duration-300"
                    >
                        Live Demo
                    </a>
                </div>
                <div className="flex w-full items-center gap-2">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                    >
                        <FaGithub />
                    </a>
                    <p className="text-xs text-white">{category}</p>
                    <h1 className="text-[#074643] font-bold">{index}</h1>
                </div>
            </div>
        </motion.div>
    );
};


export default function Projects() {
    const [activeTab, setActiveTab] = useState('projects');

    return (
        <div className="flex justify-center items-center w-full pt-20 pb-5 px-2 ">
            <div className="flex flex-col w-full max-w-4xl  p-2 h-auto">
                {/* Heading */}
                 <h1 className="text-4xl text-[#fff]  flex justify-center sm:justify-start">
                    <span className="font-bold">MY</span> PROJECTS
                </h1>
                  <h2 className="text-[#fff] text-md sm:text-lg mb-2 flex justify-center sm:justify-start">
                    What I have done already
                </h2>

                {/* Tabs */}
                <div className="flex gap-2 mb-4 flex-wrap">
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`px-5 py-2 text-sm font-light rounded-sm transition-all cursor-pointer duration-300 ${
                            activeTab === 'projects'
                                ? 'bg-[#074643] text-[#fff]'
                                : 'bg-[#262626] text-white hover:bg-[#074643]'
                        }`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => setActiveTab('designs')}
                        className={`px-5 py-2 text-sm font-light rounded-sm transition-all cursor-pointer duration-300 ${
                            activeTab === 'designs'
                                ? 'bg-[#074643] text-[#fff]'
                                : 'bg-[#1E1E1E] text-white hover:bg-[#074643]'
                        }`}
                    >
                        Designs
                    </button>
                </div>

                {/* Content */}
               <div className="w-full  rounded-sm">
                    {activeTab === 'projects' && (
                        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
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
                            // githubLink="https://github.com/khutso-student?tab=repositories"
                            category="Website Live"
                            index="06"
                        />
                        </motion.div>
                    )}

                   {activeTab === 'designs' && (
                    <div className="w-full">
                        <Design />
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}
