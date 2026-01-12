import { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink, Github, Play, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import fallbackProjects from "../data/projects.json";
interface Project {
  _id: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

const ProjectsGrid = ({ category }: { category?: string }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Added for Read More functionality
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_API_URL}/api/projects${category ? `?category=${category}` : ''}`)
  //     .then(res => {
  //       setProjects(res.data);
  //       setLoading(false);
  //     })
  //     .catch(() => setLoading(false));
  // }, [category]);

  useEffect(() => {
  axios
    .get(
      `${import.meta.env.VITE_API_URL}/api/projects${category ? `?category=${category}` : ''}`,
      { timeout: 3000 }
    )
    .then(res => {
      setProjects(res.data || fallbackProjects);
      setLoading(false);
    })
    .catch(() => {
      console.log("Projects API failed, loading local JSON fallback");
      setProjects(fallbackProjects);
      setLoading(false);
    });
}, [category]);

  if (loading) {
    return (
      <section className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="h-12 w-64 bg-slate-800/50 rounded-2xl mx-auto mb-6 animate-pulse"></div>
            <div className="h-6 w-72 bg-slate-800/50 rounded-xl mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 animate-pulse"
              >
                <div className="h-48 bg-slate-800/50 rounded-2xl mb-6"></div>
                <div className="h-6 bg-slate-800/50 rounded-lg mb-4"></div>
                <div className="h-4 bg-slate-800/50 rounded-lg mb-8 w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
            {category
              ? `${category.charAt(0).toUpperCase() + category.slice(1)} Projects`
              : 'Featured Projects'}
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Production-ready full-stack apps, AI systems, and live APIs
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project._id}
              className="group relative bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 h-full hover:bg-slate-900/95 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-slate-100 mb-4 group-hover:text-blue-400 transition-all duration-300">
                  {project.title}
                </h3>

                {/* 🔹 Description with Read More */}
                <p
                  className={`text-slate-300 leading-relaxed transition-colors group-hover:text-slate-200 ${
                    expanded[project._id] ? '' : 'line-clamp-3'
                  }`}
                >
                  {project.description}
                </p>

                <button
                  onClick={() =>
                    setExpanded(prev => ({
                      ...prev,
                      [project._id]: !prev[project._id],
                    }))
                  }
                  className="mt-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {expanded[project._id] ? 'Show less' : 'Read more'}
                </button>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8 mt-6">
                  {project.techStack?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-800/50 text-sm font-semibold text-slate-300 rounded-xl border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-slate-900 font-bold rounded-2xl"
                    >
                      <Play size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-slate-800/50 text-slate-300 rounded-2xl border border-slate-700/50"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;

