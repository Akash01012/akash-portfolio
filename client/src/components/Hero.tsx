import { ArrowRight, Code, Server, Calendar, ExternalLink, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Experience as ExperienceType } from '../types';

type Project = {
  _id: string;
  title: string;
  description: string;
  category: 'fullstack' | 'ai' | 'api';
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
};

type ApiType = {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
};

const Hero = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [loading, setLoading] = useState(true);

  const [projects, setProjects] = useState<Project[]>([]);
  const [apis, setApis] = useState<ApiType[]>([]);
  const [projLoading, setProjLoading] = useState(true);

  // Experience fetch (unchanged)
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/experience`)
      .then((res) => {
        setExperiences(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // 🔹 PROJECTS: First 2 from /api/projects
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then((res) => {
        const allProjects: Project[] = res.data || [];
        setProjects(allProjects.slice(0, 2));
      })
      .catch(() => {});
  }, []);

  // 🔹 APIS: First 2 from /api/apis (EXACTLY like your Apis component)
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/apis`)
      .then((res) => {
        const allApis: ApiType[] = res.data || [];
        setApis(allApis.slice(0, 2));
        setProjLoading(false);
      })
      .catch(() => setProjLoading(false));
  }, []);

  const skills = [
    { category: 'Languages', items: ['C/C++', 'Python', 'Java', 'JavaScript', 'Matlab'] },
    { category: 'Frameworks', items: ['ReactJS', 'NodeJS', 'ExpressJS', 'Django', 'TensorFlow'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
    { category: 'Tools', items: ['Docker', 'AWS', 'Git/GitHub'] },
  ];

  const PROFILE_IMAGE_URL = '/images/Professional_image.jpg';

  return (
    <section className="min-h-[200vh] flex flex-col px-6 md:px-10 lg:px-20 pt-20 pb-20 bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-start mb-20 animate-fade-in">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-300 text-sm font-medium animate-slide-up delay-100">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            Open to SDE / FullStack roles
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-50 leading-tight animate-slide-up delay-200">
            Hi, I'm <span className="text-blue-400 block">Akash Kumar</span>
            <span className="block text-2xl md:text-3xl text-slate-200 font-normal mt-2">
              Full-Stack &amp; Software Engineer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed animate-slide-up delay-300">
            Building high-performance React/Node apps, production APIs, and AI systems for apparel detection &amp; document intelligence.
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up delay-400">
            <Link to="/projects" className="hover:scale-105 transition-all duration-300">
              <button className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-blue-500 text-slate-900 font-bold text-base shadow-2xl shadow-blue-500/30 hover:bg-blue-400 hover:shadow-blue-500/50 transition-all duration-300 active:scale-95">
                <Code size={20} />
                View Projects
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>

        {/* PROFILE – glass card with square avatar */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative group w-80 h-80">
            <div
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr 
            from-blue-500 via-purple-500 to-indigo-500 
            opacity-70 blur-xl animate-pulse"
            />
            <div
              className="relative z-10 rounded-[2.5rem] 
            bg-slate-900/70 backdrop-blur-2xl 
            border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            p-6 transition-transform duration-500 
            group-hover:scale-[1.03] group-hover:-rotate-1"
            >
              <div className="relative mx-auto w-56 h-56 rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-tr 
                from-white/10 via-transparent to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <img
                  src={PROFILE_IMAGE_URL}
                  alt="Akash"
                  className="w-full h-full object-cover rounded-2xl 
                  transition-transform duration-700 
                  group-hover:scale-110"
                />
              </div>

              <div className="mt-5 text-center">
                <h3 className="text-lg font-semibold text-white tracking-wide">Akash Kumar</h3>
                <p className="text-sm text-slate-400">Software Engineer</p>
              </div>

              <span
                className="absolute top-6 right-6 w-3 h-3 rounded-full 
              bg-emerald-400 shadow-[0_0_12px_#34d399]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="max-w-6xl mx-auto mb-20 animate-slide-up delay-600">
        <h2 className="text-4xl md:text-5xl font-black text-slate-100 text-center mb-16 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-3xl hover:bg-slate-900/95 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-3"
            >
              <h3 className="text-xl font-bold text-slate-200 mb-6 text-center group-hover:text-blue-400 transition-colors">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <div
                    key={i}
                    className="group-hover:[&>*]:opacity-100 opacity-70 flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl hover:bg-blue-500/10 hover:opacity-100 transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
                    <span className="text-sm font-medium text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="max-w-4xl mx-auto mb-20">
        {loading ? (
          <div className="space-y-6 animate-pulse">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-slate-800/50 rounded-2xl" />
                  <div>
                    <div className="h-6 w-48 bg-slate-800/50 rounded-lg mb-2" />
                    <div className="h-5 w-32 bg-slate-800/50 rounded-lg" />
                  </div>
                </div>
                <div className="h-20 bg-slate-800/50 rounded-2xl mb-6" />
                <div className="flex gap-2">
                  <div className="h-6 w-20 bg-slate-800/50 rounded-full" />
                  <div className="h-6 w-24 bg-slate-800/50 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl font-black text-slate-100 text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Experience
            </h2>
            {experiences.slice(0, 2).map((exp, index) => (
              <div
                key={exp._id || index}
                className="group flex items-start gap-6 p-8 bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-3xl hover:bg-slate-900/90 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 mb-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl border-2 border-blue-500/40 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:bg-blue-500/30">
                  <Briefcase size={24} className="text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                      {exp.company || 'Company'}
                    </h3>
                    <MapPin size={16} className="text-slate-500 flex-shrink-0" />
                    <span className="text-sm text-slate-400">{exp.location || 'Remote'}</span>
                  </div>
                  <p className="text-slate-300 font-semibold text-lg mb-3">{exp.role || 'Role'}</p>
                  <div className="flex items-center gap-4 text-slate-400 mb-6 text-sm">
                    <Calendar size={18} />
                    <span>{exp.duration || 'Duration'}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {(exp.description || []).slice(0, 2).map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {(exp.technologies || []).slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-slate-800/50 text-xs font-medium text-slate-300 rounded-full border border-slate-700/50 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center pt-8 border-t border-slate-700/30">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500/90 text-slate-900 font-bold text-base rounded-3xl shadow-2xl shadow-blue-500/30 hover:bg-blue-400 hover:shadow-blue-500/50 transition-all duration-300 group"
              >
                View Full Timeline
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </>
        )}
      </div>

      {/* FEATURED PROJECTS & APIS */}
      <div className="max-w-6xl mx-auto space-y-16 px-4">
        {/* Projects row */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-black text-slate-100 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Featured Projects
            </h3>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>

          {projLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6"
                >
                  <div className="h-40 bg-slate-800/50 rounded-2xl mb-4" />
                  <div className="h-6 bg-slate-800/50 rounded-lg mb-3" />
                  <div className="h-4 bg-slate-800/50 rounded-lg w-3/4" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Link
                  key={project._id}
                  to="/projects"
                  className="group"
                >
                  <div className="relative flex md:flex-row flex-col gap-5 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-3xl p-6 h-full hover:bg-slate-900 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-3 transition-all duration-500 overflow-hidden">
                    {/* Image */}
                    <div className="relative w-full md:w-40 h-32 rounded-2xl overflow-hidden bg-slate-800/60 flex-shrink-0">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Code className="w-4 h-4 text-blue-400" />
                          <span className="text-xs uppercase tracking-wide text-slate-400">
                            {project.category === 'ai' ? 'AI System' : 'Full-Stack App'}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors mb-1">
                          {project.title}
                        </h4>
                        <p className="text-sm text-slate-300 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-sm text-slate-400">
                        <span className="flex flex-wrap gap-2 text-xs">
                          {project.techStack.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="px-2 py-1 bg-slate-800/60 rounded-full border border-slate-700/70"
                            >
                              {t}
                            </span>
                          ))}
                        </span>
                        <span className="inline-flex items-center gap-1 text-blue-400 group-hover:text-blue-300">
                          View details
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* APIs row */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-black text-slate-100 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Live APIs
            </h3>
            <Link
              to="/apis"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              View all APIs
              <ArrowRight size={16} />
            </Link>
          </div>

          {projLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6"
                >
                  <div className="h-16 bg-slate-800/50 rounded-lg mb-4" />
                  <div className="h-4 bg-slate-800/50 rounded-lg w-2/3" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {apis.map((api) => (
                <Link
                  key={api._id}
                  to="/apis"
                  className="group"
                >
                  <div className="relative flex flex-col gap-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-3xl p-6 h-full hover:bg-slate-900 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-3 transition-all duration-500 overflow-hidden">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-blue-500/15 border border-blue-500/40">
                        <Server className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-400">
                          Production API
                        </p>
                        <h4 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                          {api.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 line-clamp-2">
                      {api.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-sm text-slate-400">
                      <span className="flex flex-wrap gap-2 text-xs">
                        {api.techStack.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 bg-slate-800/60 rounded-full border border-slate-700/70"
                          >
                            {t}
                          </span>
                        ))}
                      </span>
                      <span className="inline-flex items-center gap-1 text-blue-400 group-hover:text-blue-300">
                        View endpoints
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
