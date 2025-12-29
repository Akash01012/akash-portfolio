import { motion } from 'framer-motion';
import { Code2, Cpu, Database } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Full‑Stack',
      items: ['React / TS', 'Node.js / Express', 'MongoDB / REST'],
    },
    {
      icon: Cpu,
      title: 'AI / ML',
      items: ['PyTorch', 'Detectron2', 'Computer Vision'],
    },
    {
      icon: Database,
      title: 'Systems & APIs',
      items: ['API Design', 'Auth / JWT', 'Caching / Redis'],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-8">
          Skills & Focus
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, title, items }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-emerald-400" size={22} />
                <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
              </div>
              <ul className="space-y-1 text-sm text-slate-300">
                {items.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
