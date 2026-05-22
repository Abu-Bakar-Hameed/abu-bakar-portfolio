export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#050816] to-[#04060f] border-t border-white/10 py-10 text-center text-slate-400">
      
      <div className="max-w-6xl mx-auto px-6">

        {/* Name / Branding */}
        <h3 className="text-xl font-semibold text-sky-300 mb-2">
          Abu Bakar
        </h3>

        <p className="text-sm text-slate-400 mb-6">
          Frontend Developer • React • Next.js • Tailwind CSS
        </p>

        {/* Divider line */}
        <div className="w-full h-px bg-white/10 mb-6" />

        {/* Copyright */}
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Abu Bakar. All rights reserved.
        </p>

      </div>
    </footer>
  );
}