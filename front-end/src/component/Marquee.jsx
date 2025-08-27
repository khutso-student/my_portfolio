import React from "react";

export default function Marquee() {
  return (
    <div className="relative overflow-hidden bg-[#FBFBFB] py-4">
      {/* Inject animation styles directly */}
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
        `}
      </style>

      {/* Duplicated content for seamless loop */}
      <div className="flex marquee whitespace-nowrap">
        <span className="text-lg sm:text-2xl font-bold text-[#9A9999] mx-8">Full Stack Developer</span>
        <span className="text-lg sm:text-2xl font-bold text-[#9A9999] mx-8">•</span>
        <span className="text-lg sm:text-2xl font-bold text-[#9A9999] mx-8">Front-End Developer</span>
        <span className="text-lg sm:text-2xl font-bold text-[#9A9999] mx-8">•</span>
        <span className="text-lg sm:text-2xl font-bold text-[#9A9999] mx-8">Back-End Developer</span>
        <span className="text-lg sm:text-2xl font-bold text-[#9A9999] mx-8">•</span>
        <span className="text-lg sm:text-2xl font-bold text-[#9A9999] mx-8">Database Design</span>

        {/* Duplicate for seamless effect */}
        <span className="text-lg sm:text-2xl font-bold text-[#9A9999] mx-8">Full Stack Developer</span>
        <span className="text-lg sm:text-2xl font-bold text-[#9A9999] mx-8">•</span>
        <span className="text-lg sm:text-2xl font-bold text-[#9A9999] mx-8">Front-End Developer</span>
        <span className="text-lg sm:text-2xl font-bold text-[#9A9999] mx-8">•</span>
        <span className="text-lg sm:text-2xl font-bold text-[#9A9999] mx-8">Back-End Developer</span>
        <span className="text-lg sm:text-2xl font-bold text-[#9A9999] mx-8">•</span>
        <span className="text-lg sm:text-2xl font-bold text-[#9A9999] mx-8">Database Design</span>
      </div>
    </div>
  );
}
