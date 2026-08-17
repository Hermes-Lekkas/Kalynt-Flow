import React from 'react';
import { Translation, Section } from './index';
import { motion } from 'motion/react';
import { ListTree, ChevronRight } from 'lucide-react';

interface SidebarTOCProps {
  t: Translation;
  sections: Section[];
  activeSectionId: string;
  onSelectSection: (id: string) => void;
}

export const SidebarTOC: React.FC<SidebarTOCProps> = ({
  t,
  sections,
  activeSectionId,
  onSelectSection,
}) => {
  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="sticky top-24 p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-xs max-h-[calc(100vh-7rem)] overflow-y-auto">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-neutral-200 dark:border-neutral-800">
          <ListTree className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
            {t.sidebar.tocTitle}
          </h2>
        </div>

        <nav className="space-y-1 relative">
          {sections.map((sec) => {
            const isActive = activeSectionId === sec.id;
            return (
              <button
                key={sec.id}
                id={`toc-link-${sec.id}`}
                onClick={() => onSelectSection(sec.id)}
                className={`relative w-full flex items-center justify-between text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors z-10 ${
                  isActive
                    ? 'font-semibold text-blue-600 dark:text-blue-400'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="tocActiveIndicator"
                    className="absolute inset-0 bg-blue-50 dark:bg-blue-950/60 rounded-lg -z-10 border-l-2 border-blue-600 dark:border-blue-400"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="truncate pr-1">{sec.title}</span>
                {isActive && <ChevronRight className="w-3.5 h-3.5 shrink-0 text-blue-600 dark:text-blue-400" />}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

