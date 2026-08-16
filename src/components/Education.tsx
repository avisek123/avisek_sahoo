import React from 'react';
import { GraduationCap } from 'lucide-react';
import { profileData } from '../data/profile';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-b border-border-custom bg-surface-custom/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-4 mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-muted-custom uppercase">
            ACADEMICS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-fg-custom">
            EDUCATION
          </h2>
        </div>

        {/* Minimal education list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {profileData.education.map((edu, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-border-custom bg-card-custom hover:shadow-sm transition-shadow relative overflow-hidden group"
            >
              {/* Background visual capsule */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/[0.01] dark:bg-indigo-400/[0.005] rounded-bl-full -z-10" />

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-surface-custom border border-border-custom text-indigo-650 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <GraduationCap size={20} />
                </div>
                
                <div className="space-y-2">
                  <span className="font-mono text-[10px] font-bold text-muted-custom tracking-wider">
                    {edu.duration}
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-lg text-fg-custom leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-muted-custom font-medium">
                    {edu.institution} · {edu.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
