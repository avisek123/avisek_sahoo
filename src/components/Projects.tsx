import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Apple } from 'lucide-react';
import { projectsData } from '../data/projects';
import { PhoneMockup } from './PhoneMockup';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-b border-border-custom bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-4 mb-20">
          <span className="font-mono text-xs font-bold tracking-widest text-muted-custom uppercase">
            PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-fg-custom">
            SELECTED WORK
          </h2>
          <p className="text-muted-custom text-base sm:text-lg max-w-xl leading-relaxed">
            Production mobile applications I've worked on.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-32">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                data-cursor="view"
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center group/card"
              >
                
                {/* Visual Area (Phone mockup): Alternate left/right on desktop */}
                <div className={`lg:col-span-6 flex justify-center order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div 
                    className="relative premium-transition group-hover/card:scale-[1.03] group-hover/card:-translate-y-2"
                    transition={{ duration: 0.4 }}
                  >
                    <PhoneMockup 
                      projectId={project.id}
                      gradient={project.visualAccent.gradient}
                      accentColor={project.visualAccent.accentColor}
                    />
                  </motion.div>
                </div>

                {/* Information Area: Alternate right/left on desktop */}
                <div className={`lg:col-span-6 text-left space-y-6 order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* Project Number & Category */}
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-4xl font-bold tracking-tight text-indigo-650 dark:text-indigo-400 opacity-30 group-hover/card:opacity-100 transition-opacity duration-300">
                      {project.number}
                    </span>
                    <div className="h-px w-8 bg-border-custom" />
                    <span className="font-mono text-xs font-bold text-muted-custom uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-fg-custom tracking-tight flex items-center gap-2">
                    {project.name}
                    <ArrowUpRight size={20} className="text-muted-custom opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-all duration-300" />
                  </h3>

                  {/* Contribution Badge */}
                  <div className="inline-block py-1 px-3 rounded-full text-xs font-semibold bg-surface-custom border border-border-custom text-muted-custom">
                    {project.contribution}
                  </div>

                  {/* Description */}
                  <p className="text-muted-custom text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-2 text-xs sm:text-sm text-muted-custom font-medium">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-indigo-500 font-bold mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-semibold font-mono py-1 px-2.5 rounded-md border border-border-custom/50 bg-card-custom/50 text-fg-custom`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Accent bottom line that expands on hover */}
                  <div className="w-full h-[2px] bg-border-custom relative overflow-hidden pt-4">
                    <div 
                      className={`absolute bottom-0 left-0 h-full bg-gradient-to-r ${project.visualAccent.gradient} w-0 group-hover/card:w-full transition-all duration-500 ease-out`}
                    />
                  </div>

                  {/* Actions CTA */}
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={project.googlePlayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-slate-950 dark:bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-sans text-xs font-bold tracking-wider uppercase shadow-lg shadow-black/10 transition-colors"
                    >
                      <Play size={12} fill="currentColor" />
                      Google Play →
                    </a>

                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-slate-950 dark:bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-sans text-xs font-bold tracking-wider uppercase shadow-lg shadow-black/10 transition-colors"
                      >
                        <Apple size={13} />
                        App Store →
                      </a>
                    )}
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
