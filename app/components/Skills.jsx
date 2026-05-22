"use client";

import { useEffect, useState } from "react";

export default function Skills() {
  const skills = [
    { name: "Next.js", level: 100 },
    { name: "AI / ML", level: 100 },
    { name: "React", level: 100 },
    { name: "Tailwind CSS", level: 100 },
    { name: "Python", level: 100 },
    { name: "FastAPI", level: 100 },
    { name: "MongoDB", level: 100 }
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="skills" className="py-24 px-4 bg-[#050b18] text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-300 text-center mb-12">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative group perspective"
            >

              {/* Glow background */}
              <div className="absolute inset-0 bg-cyan-400/10 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Card */}
              <div
                className="relative bg-white/5 border border-cyan-300/10 rounded-2xl p-6 backdrop-blur-md
                transform transition duration-300 group-hover:scale-[1.05] group-hover:rotate-x-6 group-hover:rotate-y-6
                shadow-lg"
                style={{
                  transformStyle: "preserve-3d"
                }}
              >

                {/* Skill name */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-200 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-cyan-300 font-semibold">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated bar */}
                <div className="w-full h-2 bg-cyan-500/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-sky-500 shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-1000"
                    style={{
                      width: animate ? `${skill.level}%` : "0%"
                    }}
                  />
                </div>

                {/* floating shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-transparent via-cyan-300 to-transparent blur-xl transition duration-500"></div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}