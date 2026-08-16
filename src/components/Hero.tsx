import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden dot-grid">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 py-12">
        
        {/* Left Column: Heading and description */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-xs font-semibold tracking-widest text-accent uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
            Senior Mobile App Developer
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.08] text-fg-custom"
            >
              BUILDING MOBILE <br />
              {/* FIX 1: Gradient now goes mid-amber → deep orange, fully readable on white */}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(to right, #6366f1, #4338ca)',
                }}
              >
                EXPERIENCES
              </span> <br />
              THAT PEOPLE USE.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-custom font-sans font-normal leading-relaxed max-w-xl"
            >
              Build production-ready mobile experiences with React Native, TypeScript, modern backend services and AI-powered workflows.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="px-6 py-3 rounded-full font-sans text-sm font-semibold tracking-wide flex items-center gap-2 shadow-lg premium-transition text-white"
              style={{ backgroundColor: '#4f46e5', boxShadow: '0 8px 24px rgba(79,70,229,0.25)' }}
            >
              View Projects
              <ArrowRight size={16} />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-6 py-3 rounded-full border border-border-custom bg-card-custom hover:bg-surface-custom text-fg-custom font-sans text-sm font-semibold tracking-wide flex items-center gap-2 premium-transition"
            >
              Let's Talk
              <MessageSquare size={16} />
            </a>

            <a
              href="#"
              className="px-4 py-2 font-sans text-xs font-bold tracking-wider text-muted-custom hover:text-fg-custom flex items-center gap-1.5 uppercase transition-colors"
              onClick={(e) => {
                e.preventDefault();
                alert("CV download triggered or resume link placeholder click. (Actual CV details are displayed on-site.)");
              }}
            >
              <Download size={14} />
              Download Resume
            </a>
          </motion.div>

          {/* FIX 3: CTA strip now uses capability-based labels, not tech names */}
          {/* FIX 7: text-muted-custom replaced with explicit darker color for WCAG AA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-6 border-t border-border-custom/50 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono"
            style={{ color: '#525262' }}
          >
            <span>Mobile Development</span>
            <span>·</span>
            <span>AI Integration</span>
            <span>·</span>
            <span>Product Engineering</span>
            <span>·</span>
            <span>Performance</span>
          </motion.div>
        </div>

        {/* Right Column: Subtle abstract mobile device and code lines */}
        <div className="lg:col-span-5 relative hidden lg:flex justify-center items-center h-[520px]">

          {/* Phone frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[240px] h-[480px] border-2 border-border-custom bg-card-custom/20 rounded-[40px] p-2 flex flex-col"
          >
            {/* Notch */}
            <div className="w-16 h-3.5 bg-border-custom/40 rounded-full mx-auto mt-1 flex items-center justify-center flex-shrink-0">
              <div className="w-1 h-1 rounded-full bg-border-custom/60" />
            </div>

            {/* FIX 6: macOS editor chrome — traffic lights */}
            <div className="flex items-center gap-1.5 px-3 pt-3 pb-1 flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-red-400/80 block" />
              <span className="w-2 h-2 rounded-full bg-yellow-400/80 block" />
              <span className="w-2 h-2 rounded-full bg-green-400/80 block" />
            </div>

            {/* FIX 5: Extended code snippet to fill the phone frame more tightly */}
            <div className="flex-1 px-4 font-mono text-[9px] text-indigo-500 dark:text-indigo-300 leading-relaxed overflow-hidden text-left pb-4">
              <p className="text-muted-custom/70">// mobile bootstrap</p>
              <p><span className="text-pink-500">import</span> React <span className="text-pink-500">from</span> <span className="text-amber-500">'react'</span>;</p>
              <p><span className="text-pink-500">import</span> &#123; AppRegistry &#125; <span className="text-pink-500">from</span> <span className="text-amber-500">'react-native'</span>;</p>
              <p><span className="text-pink-500">import</span> &#123; store &#125; <span className="text-pink-500">from</span> <span className="text-amber-500">'./store'</span>;</p>
              <br />
              <p><span className="text-purple-500">const</span> <span className="text-blue-500">App</span> = () =&gt; (</p>
              <p className="pl-3">&lt;<span className="text-green-500">Provider</span> store=&#123;store&#125;&gt;</p>
              <p className="pl-6">&lt;<span className="text-green-500">Container</span>&gt;</p>
              <p className="pl-9">&lt;<span className="text-green-500">VaaniChat</span></p>
              <p className="pl-12">voiceChannels=&#123;<span className="text-blue-500">true</span>&#125;</p>
              <p className="pl-12">aiAssistant=&#123;<span className="text-blue-500">true</span>&#125;</p>
              <p className="pl-9">/&gt;</p>
              <p className="pl-6">&lt;/<span className="text-green-500">Container</span>&gt;</p>
              <p className="pl-3">&lt;/<span className="text-green-500">Provider</span>&gt;</p>
              <p>);</p>
              <br />
              <p className="text-muted-custom/70">// register app entry</p>
              <p><span className="text-blue-500">AppRegistry</span>.<span className="text-green-500">registerComponent</span>(</p>
              <p className="pl-3"><span className="text-amber-500">'VaaniApp'</span>, () =&gt; <span className="text-blue-500">App</span></p>
              <p>);</p>
              <br />
              <p className="text-muted-custom/70">// bundle optimized ↓ 30%</p>
              <p className="flex items-center gap-1">
                <span>performance: </span>
                <span className="bg-emerald-500/10 text-emerald-500 px-1 py-0.5 rounded font-bold font-sans">MAX</span>
                <span className="w-1 h-3.5 bg-indigo-500 animate-pulse inline-block" />
              </p>
            </div>

            {/* Home bar */}
            <div className="w-16 h-1 bg-border-custom/40 rounded-full mx-auto mb-2 flex-shrink-0" />

            {/* FIX 4: Status dot with label inside the phone bottom area */}
            <div className="flex items-center justify-center gap-1.5 mb-3 flex-shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[8px] text-muted-custom/80 tracking-wide">Available for new projects</span>
            </div>
          </motion.div>

          {/* FIX 2: Expo chip — repositioned to straddle left edge of phone (like Redux Toolkit) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute top-20 -left-8 px-3 py-1.5 rounded-lg border border-border-custom bg-card-custom/90 backdrop-blur-sm text-xs font-semibold shadow-sm text-fg-custom z-10"
          >
            Expo 🚀
          </motion.div>

          {/* Redux Toolkit — kept in place, straddles left edge */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-24 -left-8 px-3 py-1.5 rounded-lg border border-border-custom bg-card-custom/90 backdrop-blur-sm text-xs font-semibold shadow-sm text-fg-custom z-10"
          >
            Redux Toolkit ⚙️
          </motion.div>

          {/* FIX 2: Supabase chip — repositioned to straddle right edge of phone */}
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.2 }}
            className="absolute top-1/2 -right-10 -translate-y-1/2 px-3 py-1.5 rounded-lg border border-border-custom bg-card-custom/90 backdrop-blur-sm text-xs font-semibold shadow-sm text-fg-custom z-10"
          >
            Supabase ⚡
          </motion.div>
        </div>

      </div>

      {/* Decorative gradient glowing orb */}
      <div className="absolute -top-40 right-0 w-[400px] h-[400px] rounded-full bg-indigo-600/5 dark:bg-indigo-500/5 blur-3xl -z-10" />
    </section>
  );
};
