export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#050b18] text-white px-4 sm:px-6 md:px-12 pt-24 pb-12"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left flex-1 space-y-6">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Hi, I'm{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] block sm:inline mt-1 sm:mt-0">
              Abu Bakar Hameed
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
            Frontend Developer <span className="hidden sm:inline text-cyan-500/50 mx-2">|</span> 
            Next.js Developer <span className="hidden sm:inline text-cyan-500/50 mx-2">|</span> <br className="hidden md:inline lg:hidden"/>
            AI & Data Science <span className="hidden sm:inline text-cyan-500/50 mx-2">|</span> 
            Backend Developer
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center bg-cyan-400 text-black px-8 py-3.5 rounded-xl font-bold shadow-md hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300 text-base"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto text-center border-2 border-cyan-400 text-cyan-400 px-8 py-3.5 rounded-xl font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300 text-base"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end w-full mt-6 md:mt-0">
          <div className="relative group">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full scale-95 group-hover:scale-105 transition-transform duration-500"></div>

              <img
              src="My Picture.png"
              alt="Profile"
              className="relative w-[200px] sm:w-[240px] md:w-[380px] rounded-2xl border border-cyan-300/30 shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:scale-105 transition duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
}