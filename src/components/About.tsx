import React from 'react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-border-custom bg-background">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Editorial Text & Profile image */}
        <div className="lg:col-span-8 space-y-10 text-left">
          
          {/* Eyebrow and Section Header */}
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold tracking-widest text-muted-custom uppercase">
              ABOUT ME
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-fg-custom leading-tight">
              ENGINEERING WITH A PRODUCT MINDSET.
            </h2>
          </div>

          {/* Description layout with image on left and text on right */}
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            {/* Image Frame */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0 relative group" style={{boxShadow: '0 0 0 3px #4f46e5, 0 8px 32px rgba(79,70,229,0.25)'}}>
              <img 
                src="https://avatars.githubusercontent.com/u/62586380?v=4" 
                alt={profileData.name} 
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 to-transparent pointer-events-none" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-muted-custom text-base leading-relaxed">
              {profileData.aboutText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Column: Premium Info Panel */}
        <div className="lg:col-span-4 lg:pl-6">
          <div className="sticky top-28 rounded-2xl border border-border-custom bg-card-custom p-8 text-left space-y-8 shadow-sm">
            
            <div className="space-y-2">
              <span className="font-mono text-[10px] tracking-wider text-muted-custom uppercase">
                LOCATION
              </span>
              <p className="font-sans font-bold text-base text-fg-custom">
                {profileData.location}
              </p>
            </div>

            <div className="h-px bg-border-custom/60" />

            <div className="space-y-2">
              <span className="font-mono text-[10px] tracking-wider text-muted-custom uppercase">
                ROLE
              </span>
              <p className="font-sans font-bold text-base text-fg-custom">
                {profileData.title}
              </p>
            </div>

            <div className="h-px bg-border-custom/60" />

            <div className="space-y-2">
              <span className="font-mono text-[10px] tracking-wider text-muted-custom uppercase">
                FOCUS
              </span>
              <p className="font-sans font-bold text-base text-indigo-650 dark:text-indigo-400">
                Mobile · AI · Product Engineering
              </p>
            </div>

            <div className="h-px bg-border-custom/60" />
            
            {/* Quick availability indicator */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-sans text-xs text-muted-custom font-semibold">
                Available for new projects
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
