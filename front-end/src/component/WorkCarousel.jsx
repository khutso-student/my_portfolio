import { useState, useEffect } from "react";

const works = [
  {
    title: "Authentication",
    description:
      "I can build secure authentication systems using JWT, bcrypt, and session management. This includes login, signup, password resets, and role-based access.",
  },
  {
    title: "RESTful APIs",
    description:
      "I can design and develop scalable REST APIs with Express.js and Node.js, enabling seamless communication between frontend and backend.",
  },
  {
    title: "Database Management",
    description:
      "I can design schemas, optimize queries, and manage data efficiently using MongoDB with Mongoose for both structured and unstructured data.",
  },
  {
    title: "Frontend Development",
    description:
      "I create responsive and interactive UIs using React and Tailwind CSS, focusing on user experience and performance optimization.",
  },
  {
    title: "Deployment",
    description:
      "I can deploy full-stack MERN apps to cloud platforms like Vercel, Render, MonngoDb Clusters and, ensuring CI/CD and scalability.",
  },
];

export default function WorkCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % works.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center  w-full h-80 bg-[#1a1a1aef] text-white py-4 px-3 sm:px-10  shadow-md text-center">
      {/* Slide */}
      <h2 className="text-2xl sm:text-5xl font-bold mb-4">
        {works[current].title}
      </h2>
      <p className="text-sm sm:text-lg mt-3 text-center">{works[current].description}</p>

      {/* Dots */}
      <div className="absolute flex justify-center gap-2 bottom-5 cursor-pointer">
        {works.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-[#074643]" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
