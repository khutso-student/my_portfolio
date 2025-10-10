import React from "react";
import { LiaLaptopCodeSolid } from "react-icons/lia"; // Full Stack
import { TbApiApp, TbCode, TbStackFront } from "react-icons/tb"; // Front-End, Back-End, Database
import { MdOutlineDesignServices } from "react-icons/md"; // UX/UI

export default function Marquee() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#f9f9f9] via-[#fdfdfd] to-[#f9f9f9] py-6">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
            will-change: transform;
          }
          .marquee:hover {
            animation-play-state: paused;
          }
          .marquee-item {
            transition: all 0.3s ease;
          }
          .marquee-item:hover {
            transform: scale(1.08);
            box-shadow: 0 4px 15px rgba(7, 70, 67, 0.15);
          }
        `}
      </style>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#FBFBFB] via-transparent to-[#FBFBFB] pointer-events-none"></div>

      <div className="flex marquee whitespace-nowrap">
        {[
          {
            label: "Full Stack Developer",
            icon: <LiaLaptopCodeSolid size={28} color="#074643" />,
          },
          {
            label: "Front-End Developer",
            icon: <TbApiApp size={28} color="#074643" />,
          },
          {
            label: "Back-End Developer",
            icon: <TbCode size={28} color="#074643" />,
          },
          {
            label: "Database Design",
            icon: <TbStackFront size={28} color="#074643" />,
          },
          {
            label: "UX/UI Designer",
            icon: <MdOutlineDesignServices size={28} color="#074643" />,
          },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <div className="marquee-item flex items-center gap-3 px-6 py-2 mx-6 bg-white border border-[#e0e0e0] rounded-full shadow-sm hover:shadow-md">
              <div className="p-1 rounded-full bg-[#eaf5f4] flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#074643] to-[#117c6d] text-transparent bg-clip-text">
                {item.label}
              </span>
            </div>
            <span className="text-2xl font-bold text-[#d1d1d1]">•</span>
          </React.Fragment>
        ))}

        {/* Duplicate for seamless animation */}
        {[
          {
            label: "Full Stack Developer",
            icon: <LiaLaptopCodeSolid size={28} color="#074643" />,
          },
          {
            label: "Front-End Developer",
            icon: <TbApiApp size={28} color="#074643" />,
          },
          {
            label: "Back-End Developer",
            icon: <TbCode size={28} color="#074643" />,
          },
          {
            label: "Database Design",
            icon: <TbStackFront size={28} color="#074643" />,
          },
          {
            label: "UX/UI Designer",
            icon: <MdOutlineDesignServices size={28} color="#074643" />,
          },
        ].map((item, index) => (
          <React.Fragment key={`dup-${index}`}>
            <div className="marquee-item flex items-center gap-3 px-6 py-2 mx-6 bg-white border border-[#e0e0e0] rounded-full shadow-sm hover:shadow-md">
              <div className="p-1 rounded-full bg-[#eaf5f4] flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#074643] to-[#117c6d] text-transparent bg-clip-text">
                {item.label}
              </span>
            </div>
            <span className="text-2xl font-bold text-[#d1d1d1]">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
