import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950 border-t border-slate-700/50"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6 animate-fade-in">
          AKASH
        </div>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12 animate-slide-up delay-100">
          Full-Stack & AI Engineer building high-performance apps, production APIs, and intelligent systems.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm text-slate-400 mb-10 animate-slide-up delay-200">
          <a href="/projects" className="group relative hover:text-blue-400 transition-all duration-300 font-medium py-2 px-4 hover:bg-blue-500/10 rounded-xl">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="/experience" className="group relative hover:text-blue-400 transition-all duration-300 font-medium py-2 px-4 hover:bg-blue-500/10 rounded-xl">
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="/apis" className="group relative hover:text-blue-400 transition-all duration-300 font-medium py-2 px-4 hover:bg-blue-500/10 rounded-xl">
            APIs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="/contact" className="group relative hover:text-blue-400 transition-all duration-300 font-medium py-2 px-4 hover:bg-blue-500/10 rounded-xl">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
          </a>
        </div>
        
        <div className="h-px w-24 bg-gradient-to-r from-blue-400/50 via-slate-300/20 to-purple-400/50 mx-auto mb-8 animate-pulse-slow" />
        
        <div className="text-sm text-slate-500 animate-slide-up delay-300">
          © 2025 Akash. Built with React, Node.js & ❤️.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
