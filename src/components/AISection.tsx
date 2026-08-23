import React from 'react';
import { Cpu, Terminal, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export const AISection: React.FC = () => {
  const { heading, description, points } = profileData.aiFocus;

  const icons = [
    <Cpu className="w-5 h-5 text-indigo-500" />,
    <Terminal className="w-5 h-5 text-indigo-500" />,
    <Sparkles className="w-5 h-5 text-indigo-500" />
  ];

  return (
    <section className="py-24 border-b border-border-custom bg-background relative overflow-hidden">
      
      {/* Background visual element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-[600px] h-[300px] bg-indigo-500/[0.02] dark:bg-indigo-400/[0.01] rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Block: Heading and explanation */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs font-bold tracking-widest text-muted-custom uppercase flex items-center gap-2">
              <Sparkles size={12} className="text-indigo-500" />
              AI × MOBILE
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-fg-custom leading-tight">
              {heading}
            </h2>
            <p className="text-muted-custom text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right Block: Structured grid of points */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((point, index) => {
              const [title, detail] = point.split(':');
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border border-border-custom bg-card-custom/40 backdrop-blur-sm flex items-start gap-4 hover:border-indigo-500/30 transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-surface-custom border border-border-custom flex-shrink-0">
                    {icons[index % icons.length]}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-base text-fg-custom">
                      {title.trim()}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-muted-custom leading-relaxed">
                      {detail?.trim()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
