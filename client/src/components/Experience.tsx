// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { Briefcase, Calendar, MapPin } from 'lucide-react';
// import type { Experience as ExperienceType } from '../types';

// const Experience = () => {
//   const [experiences, setExperiences] = useState<ExperienceType[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/experience')
//       .then(res => {
//         setExperiences(res.data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <section className="py-32 px-6 min-h-screen">
//         <div className="max-w-4xl mx-auto text-center mb-24">
//           <div className="h-16 w-80 bg-white/10 rounded-2xl mx-auto mb-8 animate-pulse"></div>
//           <div className="h-6 w-64 bg-white/10 rounded-xl mx-auto animate-pulse"></div>
//         </div>
//         <div className="max-w-4xl mx-auto relative">
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
//           {[...Array(4)].map((_, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="flex items-center mb-16 animate-pulse"
//             >
//               <div className="w-24 h-24 bg-white/10 rounded-2xl mr-8 flex-shrink-0"></div>
//               <div className="flex-1 bg-white/10 h-32 rounded-2xl"></div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-32 px-6 min-h-screen">
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-4xl mx-auto mb-24"
//       >
//         <motion.h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
//           Experience
//         </motion.h2>
//         <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//           Professional journey building impactful solutions
//         </p>
//       </motion.div>

//       <div className="max-w-4xl mx-auto relative">
//         <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500/50 to-pink-500/50 backdrop-blur-sm"></div>
        
//         {experiences.map((exp, idx) => (
//           <motion.div
//             key={exp._id}
//             initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className={`flex items-center mb-24 ${
//               idx % 2 === 0 ? 'flex-row-reverse' : ''
//             }`}
//           >
//             {/* Timeline dot */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg z-10"></div>
            
//             {/* Content */}
//             <div className={`glass-card p-8 rounded-3xl w-full max-w-md shadow-2xl group hover:shadow-purple-500/25 transition-all duration-500 ${
//               idx % 2 === 0 ? 'ml-auto' : 'mr-auto'
//             }`}>
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
//                   <Briefcase size={28} className="text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
//                   <p className="text-purple-400 font-semibold">{exp.role}</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 text-gray-400 mb-6 text-sm">
//                 <Calendar size={18} />
//                 <span>{exp.duration}</span>
//               </div>

//               <ul className="space-y-3 mb-8">
//                 {exp.description?.map((desc, i) => (
//                   <li key={i} className="flex items-start gap-3 text-gray-300">
//                     <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
//                     <span>{desc}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="flex flex-wrap gap-2">
//                 {exp.technologies?.map((tech, i) => (
//                   <span key={i} className="px-3 py-1 bg-white/10 text-xs rounded-full font-medium text-purple-200 border border-white/20">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;


import { useState, useEffect } from 'react';
import axios from 'axios';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Experience as ExperienceType } from '../types';

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/experience')
      .then(res => {
        setExperiences(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-6 md:px-10 lg:px-20 min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="h-9 w-48 bg-slate-800/50 rounded-xl mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 w-40 bg-slate-800/50 rounded-lg mx-auto animate-pulse"></div>
        </div>
        <div className="max-w-2xl mx-auto space-y-5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 animate-pulse">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-slate-800/50 rounded-xl flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="h-5 w-40 bg-slate-800/50 rounded-lg mb-1"></div>
                  <div className="h-4 w-28 bg-slate-800/50 rounded-lg"></div>
                </div>
              </div>
              <div className="h-12 bg-slate-800/50 rounded-xl mb-3"></div>
              <div className="flex gap-2 flex-wrap">
                <div className="h-6 w-14 bg-slate-800/50 rounded-lg"></div>
                <div className="h-6 w-16 bg-slate-800/50 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">
            Experience
          </h2>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            Professional journey building full-stack & AI solutions
          </p>
        </div>

        {/* Experiences */}
        <div className="space-y-5">
          {experiences.map((exp, idx) => (
            <div 
              key={exp._id || idx}
              className="group relative bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-900/95 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 hover:-translate-y-1 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              <div className="relative z-10 flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl border-2 border-blue-500/40 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-500/30 transition-all duration-300">
                  <Briefcase size={22} className="text-blue-400" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-slate-100 group-hover:text-blue-400 transition-all duration-300 leading-tight">
                        {exp.company || 'Company'}
                      </h3>
                      <p className="text-slate-400 font-semibold text-sm">{exp.role || 'Role'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-500 mb-3 text-xs flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{exp.duration || 'Duration'}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-1.5 mb-3">
                    {(exp.description || []).slice(0, 2).map((desc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-300 text-xs leading-snug group-hover:text-slate-200 transition-colors">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mt-1 flex-shrink-0"></div>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {(exp.technologies || []).slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800/50 text-xs font-semibold text-slate-400 rounded-lg border border-slate-700/50 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
