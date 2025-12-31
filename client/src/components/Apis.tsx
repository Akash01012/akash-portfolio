import { useState, useEffect } from "react";
import axios from "axios";
import { Server, Github, Copy, Play, ExternalLink } from "lucide-react";
import type { Api as ApiType } from "../types";

const Apis = () => {
  const [apis, setApis] = useState<ApiType[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/apis`)
      .then((res) => {
        setApis(res.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (loading) {
    return (
      <section className="py-16 px-6 md:px-10 lg:px-20 min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 w-40 bg-slate-800/50 rounded-xl mx-auto mb-3 animate-pulse"></div>
            <div className="h-4 w-64 bg-slate-800/50 rounded-lg mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 h-72 animate-pulse max-w-md mx-auto"
              >
                <div className="h-10 w-32 bg-slate-800/50 rounded-lg mb-3"></div>
                <div className="h-4 w-3/4 bg-slate-800/50 rounded mb-4"></div>
                <div className="h-20 bg-slate-800/50 rounded-lg mb-4"></div>
                <div className="flex gap-3">
                  <div className="h-10 w-20 bg-slate-800/50 rounded-lg flex-1"></div>
                  <div className="w-10 h-10 bg-slate-800/50 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">
            Live APIs
          </h2>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            Production-grade backend services with real-world use cases
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {apis.map((api) => (
            <div
              key={api._id}
              className="
                w-full max-w-lg mx-auto h-90
                rounded-2xl p-4
                bg-slate-900/80 backdrop-blur-xl
                border border-slate-700/50 hover:border-blue-400/50
                shadow-xl hover:shadow-2xl hover:shadow-blue-500/20
                transition-all duration-400 hover:-translate-y-2
              "
            >
              {/* Status dot */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-emerald-400 shadow-lg" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-500/15 border border-blue-500/40 rounded-lg">
                  <Server className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {api.name}
                  </h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    Production API
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                className={`text-sm text-slate-300 leading-relaxed mb-4
                ${expandedId === api._id ? "" : "line-clamp-3"}`}
              >
                {api.description}
              </p>

              {api.description?.length! > 100 && (
                <button
                  onClick={() =>
                    setExpandedId(expandedId === api._id ? null : api._id)
                  }
                  className="text-sm text-blue-400 hover:text-blue-300 mb-4 font-medium"
                >
                  {expandedId === api._id ? "Show less" : "Read more"}
                </button>
              )}

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-4" />

              {/* Endpoint */}
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 uppercase font-medium mb-2">
                  Endpoint
                </div>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-sm font-mono text-blue-300 bg-cyan-500/10 px-3 py-2 rounded-lg border border-cyan-400/30 backdrop-blur-sm shadow-cyan-500/20 shadow-lg break-all hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-200">
                    {api.endpoint}
                  </code>
                  <button
                    onClick={() => copyToClipboard(api.endpoint || "")}
                    className="p-2.5 bg-slate-800/70 hover:bg-blue-500/30 text-slate-300 hover:text-blue-400 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-200"
                    title="Copy endpoint"
                  >
                    <Copy size={14} />
                  </button>
                </div>
              </div>

              {/* Methods */}
              <div className="flex flex-wrap gap-2 mb-4">
                {(api.methods || ["GET"]).map((m, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold bg-slate-800/60 border border-slate-700/50 text-cyan-300 rounded-lg hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-200"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-700/30">
                <span className="text-xs text-slate-500">
                  Secure • JWT Auth
                </span>
                {api.githubUrl && (
                  <a
                    href={api.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg border border-slate-700/50 hover:border-slate-600 transition-all duration-200 font-medium text-sm"
                  >
                    <Github size={14} />
                    Source
                  </a>
                )}
              </div>

              {/* Test button */}
            </div>
          ))}
        </div>

        {apis.length === 0 && (
          <div className="text-center py-24 mt-12">
            <div className="w-20 h-20 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Server className="w-10 h-10 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-400 mb-2">
              No APIs Yet
            </h3>
            <p className="text-slate-500">
              APIs will appear here when deployed
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Apis;
