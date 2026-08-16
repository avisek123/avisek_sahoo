import React from 'react';
import { Mail, Phone, Linkedin, Github, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { profileData } from '../data/profile';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 border-b border-border-custom bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Column 1: Info and description */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs font-bold tracking-widest text-muted-custom uppercase">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-fg-custom leading-[1.1]">
              HAVE A MOBILE <br />
              PRODUCT IN MIND?
            </h2>
            <p className="text-muted-custom text-base sm:text-lg max-w-md leading-relaxed">
              Let's build something useful, fast and beautifully engineered.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-4 pt-4">
              <a 
                href={profileData.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border-custom bg-card-custom hover:bg-surface-custom text-muted-custom hover:text-fg-custom transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={profileData.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border-custom bg-card-custom hover:bg-surface-custom text-muted-custom hover:text-fg-custom transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              {profileData.socials.twitter && (
                <a 
                  href={profileData.socials.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border-custom bg-card-custom hover:bg-surface-custom text-muted-custom hover:text-fg-custom transition-all"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={18} />
                </a>
              )}
              {profileData.socials.instagram && (
                <a 
                  href={profileData.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border-custom bg-card-custom hover:bg-surface-custom text-muted-custom hover:text-fg-custom transition-all"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Big Action Buttons */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-border-custom bg-card-custom p-8 space-y-6 shadow-sm">
              <h3 className="font-display font-bold text-lg text-fg-custom">
                Direct Channels
              </h3>

              <div className="space-y-4">
                {/* Email Action */}
                <a 
                  href={`mailto:${profileData.email}`}
                  className="w-full py-4 px-6 rounded-xl border border-border-custom bg-surface-custom hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:border-indigo-500/30 flex items-center justify-between text-fg-custom font-sans text-sm font-bold tracking-wide premium-transition group"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-indigo-500" />
                    <span>EMAIL ME</span>
                  </div>
                  <span className="text-xs text-muted-custom group-hover:text-indigo-500 transition-colors flex items-center gap-1 font-mono">
                    {profileData.email}
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>

                {/* Call Action */}
                <a 
                  href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                  className="w-full py-4 px-6 rounded-xl border border-border-custom bg-surface-custom hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:border-indigo-500/30 flex items-center justify-between text-fg-custom font-sans text-sm font-bold tracking-wide premium-transition group"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-indigo-500" />
                    <span>CALL ME</span>
                  </div>
                  <span className="text-xs text-muted-custom group-hover:text-indigo-500 transition-colors flex items-center gap-1 font-mono">
                    {profileData.phone}
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
