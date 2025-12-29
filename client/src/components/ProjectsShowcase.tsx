import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import axios from 'axios';
import type { Project } from '../types';

const ProjectsShowcase = () => {
  const [fullstack, setFullstack] = useState<Project[]>([]);
  const [ai, setAi] = useState<Project[]>([]);
  const [api, setApi] = useState<Project[]>([]);

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8000/api/projects?category=fullstack'),
      axios.get('http://localhost:8000/api/projects?category=ai'),
      axios.get('http://localhost:8000/api/projects?category=api'),
    ]).then(([fs, aiRes, apiRes]) => {
      setFullstack((fs.data.data || fs.data || []).slice(0, 2));
      setAi((aiRes.data.data || aiRes.data || []).slice(0, 2));
      setApi((apiRes.data.data || apiRes.data || []).slice(0, 2));
    });
  }, []);

  const block = (title: string, projects: Project[]) => (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
      <div className="space-y-3">
        {projects.map((p) => (
          <div
            key={p._id}
            className="rounded-xl border border-slate-700 bg-slate-900/70 p-4"
          >
            <p className="text-slate-50 text-sm font-medium">{p.title}</p>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
            Selected Work
          </h2>
          <Link
            to="/projects"
            className="text-sm text-emerald-300 hover:text-emerald-200"
          >
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {block('Full‑Stack', fullstack)}
          {block('AI Projects', ai)}
          {block('APIs', api)}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
