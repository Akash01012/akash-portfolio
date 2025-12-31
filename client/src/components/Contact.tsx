import { Mail, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const socials = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/Akash01012', color: 'slate' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/akash-kumar-042495237/', color: 'blue' },
    { icon: Mail, label: 'Email', url: 'mailto:akash639673@gmail.com', color: 'emerald' },
    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/akashhh_1_1?igsh=OWthaWRuYnU2ejJn&utm_source=qr', color: 'pink' }
  ];

  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center space-y-12">
        {/* Main CTA Card */}
        <div className="group relative bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-3xl p-12 hover:bg-slate-900/95 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-2 max-w-lg mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-sm -z-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-md mx-auto group-hover:text-slate-300 transition-colors">
              Ready to turn your ideas into reality? Get in touch and let's create something extraordinary together.
            </p>
            
            <a
              href="mailto:akash639673@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-slate-900 font-bold text-lg rounded-2xl shadow-xl shadow-blue-500/40 hover:from-blue-400 hover:to-indigo-400 hover:shadow-blue-500/60 hover:-translate-y-2 transition-all duration-400 group-hover:scale-[1.02] active:scale-[0.98] border border-blue-500/50"
            >
              Say Hello
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-3xl p-10 hover:bg-slate-900/95 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-slate-100 mb-10 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Connect With Me
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socials.map(({ icon: Icon, label, url, color }, i) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 rounded-2xl border border-slate-700/50 hover:border-${color}-500/50 hover:bg-${color}-500/10 backdrop-blur-sm transition-all duration-400 hover:shadow-2xl hover:shadow-${color}-500/30 hover:-translate-y-2 hover:scale-[1.05] flex flex-col items-center gap-3 h-full animate-slide-up`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${color}-500/20 to-${color}-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm -z-10`}></div>
                
                <div className={`p-4 bg-gradient-to-r from-${color}-500/20 to-${color}-600/20 rounded-2xl border border-${color}-500/40 group-hover:bg-${color}-500/40 group-hover:scale-110 group-hover:border-${color}-400/60 transition-all duration-400 shadow-lg group-hover:shadow-${color}-500/40`}>
                  <Icon size={28} className={`text-${color}-400 group-hover:text-${color}-300 transition-colors duration-300`} />
                </div>
                
                <div className="space-y-1">
                  <span className="text-xm font-bold text-slate-200 group-hover:text-slate-100 transition-colors">{label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
