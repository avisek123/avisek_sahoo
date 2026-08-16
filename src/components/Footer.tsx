import React from 'react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-background border-t border-border-custom">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Profile identity info */}
        <div className="text-left space-y-1">
          <h4 className="font-display font-extrabold text-base tracking-wider text-fg-custom">
            {profileData.name.toUpperCase()}
          </h4>
          <p className="font-sans text-xs text-muted-custom">
            {profileData.title}
          </p>
        </div>

        {/* Footer Navigation */}
        <ul className="flex flex-wrap items-center gap-6 font-sans text-xs font-semibold text-muted-custom">
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-fg-custom transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => handleLinkClick(e, '#experience')} className="hover:text-fg-custom transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className="hover:text-fg-custom transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')} className="hover:text-fg-custom transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-fg-custom transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Copyright notice */}
        <div className="font-mono text-[10px] text-muted-custom md:text-right">
          © {currentYear} {profileData.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
