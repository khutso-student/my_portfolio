import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from 'framer-motion';



import StandardBank from "../assets/StandardBank.png";
import TymBank from "../assets/TymBank App.png";
import Hotel from '../assets/Hotel.png';
import WaxMovies from '../assets/WaxMovies.png';
import Plants from '../assets/PlantsLogin.png';
import TruckDebo from '../assets/TruckDEBO.png'
import Queue from '../assets/QueueCare.png';
import Adidas from '../assets/Adidas.png';
import Meetify from '../assets/Meetify.png';
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";

const DesignCard = ({ image, title, subtitle }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-[#171717] w-full h-70 border border-[#52555e] rounded-lg p-2">
        {/* Image with hover effect */}
        <div className="w-full h-50 rounded-md bg-[#ffffff0e] mb-3 relative group overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-md transition duration-500 ease-in-out group-hover:opacity-30"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
            <button
              onClick={() => setModal(true)}
              className="text-white px-4 py-2 cursor-pointer rounded text-sm hover:text-[#074643]"
            >
              <HiOutlineViewfinderCircle className="text-[50px]" />
            </button>
          </div>
        </div>

        {/* Text Content */}
        <p className="text-sm text-white mb-1">{title}</p>
        <p className="text-[#fff] text-xs font-bold">{subtitle}</p>
      </div>

      {/* Modal for single card */}
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[90%] max-w-4xl"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default function Design() {
  const [viewAll, setViewAll] = useState(false);

  return (
    <motion.div 
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full"
     initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: 'easeOut' }}>
      {/* Initial Grid */}
      <DesignCard image={StandardBank} title="Standard Bank" subtitle="UX Redesign" />
      <DesignCard image={TymBank} title="TymBank" subtitle="UX Redesign" />
      <DesignCard image={Hotel} title="Hotel" subtitle="App Design" />
      <DesignCard image={WaxMovies} title="WAX-Movies" subtitle="App Design" />
      <DesignCard image={Plants} title="Plants Login" subtitle="App Design" />
      <DesignCard image={TruckDebo} title="Truck DEBO" subtitle="App Design" />


      {/* View All Button */}
      <div className="w-full p-2"> 
        <button
          onClick={() => setViewAll(!viewAll)}
          className="bg-[#292929] hover:bg-[#074643] text-sm text-white px-6 py-2 rounded-md cursor-pointer duration-300"
        >
          View All
        </button>
      </div>

      {/* View All Modal */}
      {viewAll && (
        <div
          onClick={() => setViewAll(false)}
          className=" fixed top-0 left-0 bg-[#000000f8] w-full h-full flex justify-center items-center z-50 p-5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1a1a1a] w-full h-full p-3 rounded-md overflow-y-auto no-scrollbar"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <DesignCard image={StandardBank} title="Standard Bank" subtitle="UX Redesign" />
              <DesignCard image={TymBank} title="TymBank" subtitle="UX Redesign" />
              <DesignCard image={Hotel} title="Hotel" subtitle="App Design" />
              <DesignCard image={WaxMovies} title="WAX-Movies" subtitle="App Design" />
              <DesignCard image={Plants} title="Plants Login" subtitle="App Design" />
              <DesignCard image={TruckDebo} title="Truck DEBO" subtitle="App Design" />
              <DesignCard image={Queue} title="QueueCare" subtitle="Software Design" />
              <DesignCard image={Adidas} title="Adidas Product" subtitle="Product Design" />
              <DesignCard image={Meetify} title="Meetify" subtitle="Software" />
            </div>
          </div>
          <div onClick={() => setViewAll(false)}
          className="absolute top-5  right-5  flex justify-center items-center bg-[#3a3a3a] hover:bg-[#074643] text-white w-10 h-10 rounded-md duration-300 cursor-pointer">
            <TfiClose />
          </div>
        </div>
      )}
    </motion.div>
  );
}
