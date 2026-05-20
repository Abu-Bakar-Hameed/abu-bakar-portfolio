"use client";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-[#050b18] text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-10">
          About Me
        </h2>

        {/* Content (OPEN STYLE — NO BOX) */}
        <div className="space-y-8 text-gray-300 text-lg md:text-xl leading-9">

          <p>
            💙 <span className="text-cyan-300 font-semibold">About Me Description</span>
          </p>

          <p>
            I am a passionate <span className="text-cyan-200 font-semibold">Full Stack Web Developer</span> who enjoys building modern, fast, and responsive web applications.
            I specialize in creating interactive user interfaces using <span className="text-cyan-200">Next.js</span>, <span className="text-cyan-200">React</span>, and <span className="text-cyan-200">Tailwind CSS</span>, focusing on clean design and great user experience.
          </p>

          <p>
            On the backend side, I work with <span className="text-cyan-200 font-semibold">Python</span> and <span className="text-cyan-200 font-semibold">FastAPI</span> to build powerful and scalable APIs.
            I also use <span className="text-cyan-200 font-semibold">MongoDB</span> for efficient and flexible database management.
          </p>

          <p>
            Along with web development, I have a strong interest in <span className="text-cyan-300 font-semibold">Artificial Intelligence</span> and <span className="text-cyan-300 font-semibold">Data Science</span>.
            I enjoy working on data-driven projects and exploring machine learning concepts to build smarter applications.
          </p>

          <p>
            My goal is to combine <span className="text-cyan-300 font-semibold">Web Development + AI + Data Science</span> to create modern, intelligent, and impactful digital solutions that solve real-world problems.
          </p>

        </div>

      </div>
    </section>
  );
}