import React from 'react';
import { profileData } from '../data/profile';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-b border-border-custom bg-surface-custom/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-4 mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-muted-custom uppercase">
            EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-fg-custom">
            TECHNICAL TOOLKIT
          </h2>
        </div>

        {/* Skills layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Primary Skills (isPrimary) - Visual Domination */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-mono text-xs font-bold tracking-widest text-muted-custom uppercase border-b border-border-custom pb-2">
              PRIMARY TECH STACK
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileData.skills.find(s => s.isPrimary)?.items.map((skill) => (
                <div 
                  key={skill}
                  className="p-5 rounded-xl border border-border-custom bg-card-custom hover:border-indigo-500/50 hover:shadow-sm premium-transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-650 dark:bg-indigo-400" />
                    <span className="font-sans font-bold text-base text-fg-custom">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Categories */}
          <div className="lg:col-span-6 space-y-10">
            {profileData.skills.filter(s => !s.isPrimary).map((category, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="font-mono text-xs font-bold tracking-widest text-muted-custom uppercase border-b border-border-custom pb-2">
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 font-sans font-medium text-sm rounded-lg border border-border-custom/80 bg-card-custom/40 text-muted-custom hover:text-fg-custom hover:border-border-custom hover:bg-card-custom transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
