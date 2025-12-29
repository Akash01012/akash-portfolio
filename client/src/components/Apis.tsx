import { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink, Server, Code2, Copy, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Api as ApiType } from '../types';

const Apis = () => {
  const [apis, setApis] = useState<ApiType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/apis`)
      .then(res => {
        setApis(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (loading) {
    return (
      <section className="py-20 px-6 md:px-10 lg:px-20 min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-10 w-48 bg-slate-800/50 rounded-2xl mx-auto mb-4 animate-pulse"></div>
            <div className="h-5 w-56 bg-slate-800/50 rounded-xl mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 h-72 animate-pulse">
                <div className="h-10 w-32 bg-slate-800/50 rounded-xl mb-4"></div>
                <div className="h-4 w-3/4 bg-slate-800/50 rounded-lg mb-3"></div>
                <div className="h-20 bg-slate-800/50 rounded-xl mb-4"></div>
                <div className="flex gap-3 mb-6">
                  <div className="h-10 w-20 bg-slate-800/50 rounded-xl"></div>
                  <div className="h-10 flex-1 bg-slate-800/50 rounded-xl"></div>
                </div>
                <div className="h-12 w-28 bg-slate-800/50 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Live APIs
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
            Production-ready APIs with full documentation
          </p>
        </div>

        {/* APIs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {apis.map((api, idx) => (
            <div
              key={api._id}
              className="group relative bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-2xl p-8 h-full hover:bg-slate-900 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              
              {/* Header */}
              <div className="relative z-10 flex items-center gap-4 mb-6 pb-4 border-b border-slate-700/40">
                <div className="p-3 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-2xl border border-blue-500/50 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Server size={24} className="text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-black text-slate-100 group-hover:text-blue-400 transition-all duration-300 mb-1 leading-tight">
                    {api.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors line-clamp-2">
                    {api.description}
                  </p>
                </div>
              </div>

              {/* Endpoint */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-lg border border-green-500/40">
                    GET
                  </span>
                  <span className="text-xs text-slate-600 font-medium uppercase tracking-wide">Endpoint</span>
                </div>
                <div className="relative group/api">
                  <code className="block w-full p-4 bg-slate-900/95 backdrop-blur-sm rounded-2xl font-mono text-sm font-semibold text-slate-200 border border-slate-700/60 break-all group-hover:border-blue-500/60 transition-all duration-300">
                    {api.endpoint}
                  </code>
                  <button
                    onClick={() => copyToClipboard(api.endpoint)}
                    className="absolute -top-1 -right-1 p-2.5 opacity-0 group-hover/api:opacity-100 transition-all duration-300 bg-slate-800/90 hover:bg-blue-500/30 text-slate-300 hover:text-blue-400 rounded-xl border border-slate-700/50 hover:border-blue-500/40 group-hover/api:scale-105 shadow-lg"
                    title="Copy endpoint"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>

              {/* Methods */}
              <div className="flex flex-wrap gap-2 mb-8">
                {(api.methods || []).map((method, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-slate-800/60 text-xs font-bold text-slate-300 rounded-lg border border-slate-700/60 hover:bg-blue-500/30 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group-hover:scale-105 shadow-sm"
                  >
                    {method}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                {api.liveUrl && (
                  <a
                    href={api.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/btn flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-slate-900 font-bold text-sm rounded-xl shadow-lg shadow-blue-500/40 hover:from-blue-400 hover:to-indigo-400 hover:shadow-blue-500/60 hover:-translate-y-1 transition-all duration-400 active:scale-95"
                  >
                    <Play size={16} />
                    Test Live
                  </a>
                )}
                {api.githubUrl && (
                  <a
                    href={api.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/70 hover:bg-slate-700/70 text-slate-300 hover:text-blue-400 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-400 group-hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-blue-500/30 flex items-center justify-center"
                  >
                    <Code2 size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apis;
