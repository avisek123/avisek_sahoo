import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { profileData } from '../data/profile';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        // Clear mobile expansion state on desktop
        setExpandedIndex(null);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleExpand = (idx: number) => {
    if (!isMobile) return; // Expand/collapse only on mobile
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-24 border-b border-border-custom bg-surface-custom/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-4 mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-muted-custom uppercase">
            HISTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-fg-custom">
            EXPERIENCE
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-border-custom ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 text-left">
          
          {profileData.experience.map((job, idx) => {
            const isRoleExpanded = !isMobile || expandedIndex === idx;

            return (
              <div key={idx} className="relative group">
                
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[45px] md:-left-[61px] top-1.5 w-8 h-8 rounded-full border border-border-custom bg-card-custom flex items-center justify-center text-muted-custom group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:border-indigo-500/50 transition-colors z-10 shadow-sm">
                  <Briefcase size={14} />
                </div>

                {/* Job Details Card */}
                <div className="border border-border-custom bg-card-custom rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow relative">
                  
                  {/* Collapsible Header toggle button on Mobile */}
                  <div 
                    onClick={() => toggleExpand(idx)}
                    className={`flex items-start justify-between ${isMobile ? 'cursor-pointer select-none' : ''}`}
                  >
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-display font-bold text-fg-custom group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">
                        {job.role}
                      </h3>
                      <p className="font-sans font-medium text-sm text-muted-custom flex flex-wrap gap-x-2 gap-y-1 items-center">
                        <span>{job.company}</span>
                        <span>·</span>
                        <span>{job.location}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Date label */}
                      <span className="hidden sm:inline-block font-mono text-xs font-semibold px-3 py-1 rounded-full bg-surface-custom border border-border-custom text-muted-custom">
                        {job.duration}
                      </span>

                      {/* Expand Chevron (Mobile only) */}
                      {isMobile && (
                        <div className="p-1 rounded-full bg-surface-custom border border-border-custom text-muted-custom">
                          {isRoleExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Date label for mobile */}
                  <div className="sm:hidden mt-2 font-mono text-[10px] text-muted-custom">
                    {job.duration}
                  </div>

                  {/* Expandable Highlight Bullet Points */}
                  <AnimatePresence initial={false}>
                    {isRoleExpanded && (
                      <motion.div
                        initial={isMobile ? { height: 0, opacity: 0 } : false}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <ul className="mt-6 space-y-3 font-sans text-sm sm:text-base text-muted-custom leading-relaxed pl-4 list-disc marker:text-indigo-500">
                          {job.highlights.map((highlight, hIdx) => (
                            <li key={hIdx}>{highlight}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
