import React from 'react';
import { profileData } from '../data/profile';

export const TechStack: React.FC = () => {
  // Find the primary skills list (only the 7 requested ones)
  const coreTech = profileData.skills.find(s => s.isPrimary)?.items || [];

  return (
    <section className="border-y border-border-custom bg-surface-custom/30 py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        {/* Strip Title */}
        <div className="flex-shrink-0">
          <h2 className="font-mono text-xs font-bold tracking-widest uppercase" style={{color: '#3f3f50'}}>
            CORE TECHNOLOGY
          </h2>
        </div>

        {/* Technologies List */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {coreTech.map((tech) => (
            <div 
              key={tech} 
              className="flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-500 transition-colors" />
              <span className="font-sans font-semibold text-sm tracking-wide text-fg-custom group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
