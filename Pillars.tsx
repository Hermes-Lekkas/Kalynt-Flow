import React from 'react';
import { Translation } from './index';
import { motion } from 'motion/react';
import { Database, Sparkles, ShieldAlert, UserX, ArrowUpRight } from 'lucide-react';

interface PillarsProps {
  t: Translation;
  onSelectPillar: (pillarId: string) => void;
}

export const Pillars: React.FC<PillarsProps> = ({ t, onSelectPillar }) => {
  const pillarList = [
    {
      id: 'privacy',
      title: t.pillars.privacyTitle,
      desc: t.pillars.privacyDesc,
      icon: Database,
      colorClass: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900',
    },
    {
      id: 'ai',
      title: t.pillars.aiTitle,
      desc: t.pillars.aiDesc,
      icon: Sparkles,
      colorClass: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-900',
    },
    {
      id: 'moderation',
      title: t.pillars.ugcTitle,
      desc: t.pillars.ugcDesc,
      icon: ShieldAlert,
      colorClass: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-900',
    },
    {
      id: 'deletion',
      title: t.pillars.deletionTitle,
      desc: t.pillars.deletionDesc,
      icon: UserX,
      colorClass: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-900',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillarList.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.35, ease: 'easeOut' }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectPillar(pillar.id)}
              className="group relative p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-xs hover:shadow-md hover:border-blue-400/80 dark:hover:border-blue-700/80 transition-all cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${pillar.colorClass} group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-300 dark:text-neutral-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

