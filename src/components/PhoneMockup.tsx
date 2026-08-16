import React from 'react';
import { motion } from 'framer-motion';

interface PhoneMockupProps {
  projectId: string;
  gradient: string;
  accentColor: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ projectId, gradient, accentColor }) => {
  // Render abstract UI inside the screen
  const renderAbstractScreen = () => {
    switch (projectId) {
      case 'vaani':
        return (
          <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between text-slate-200">
            {/* App Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="h-2 w-12 bg-slate-800 rounded" />
              <div className="h-4 w-4 bg-indigo-500 rounded-full flex items-center justify-center text-[8px] font-bold">V</div>
            </div>

            {/* Conversation Flow */}
            <div className="flex-1 flex flex-col justify-center gap-3 my-2 overflow-hidden">
              {/* Speaker Card 1 */}
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-indigo-500/20 border border-indigo-500 flex items-center justify-center text-[9px] text-indigo-400 font-bold">A</div>
                <div className="flex-1">
                  <div className="h-1.5 w-16 bg-slate-700 rounded mb-1" />
                  <div className="h-1 w-24 bg-slate-800 rounded" />
                </div>
                <div className="h-2.5 w-2 bg-indigo-400 rounded-full animate-pulse" />
              </div>

              {/* Turn indicator */}
              <div className="flex justify-center my-0.5">
                <div className="px-2 py-0.5 rounded-full bg-indigo-950 border border-indigo-800 text-[7px] text-indigo-300 font-mono tracking-wider">
                  MICROPHONE TRANSITION
                </div>
              </div>

              {/* Speaker Card 2 */}
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg flex items-center gap-2 opacity-60">
                <div className="h-6 w-6 rounded-full bg-slate-700 flex items-center justify-center text-[9px]">B</div>
                <div className="flex-1">
                  <div className="h-1.5 w-20 bg-slate-700 rounded mb-1" />
                  <div className="h-1 w-12 bg-slate-800 rounded" />
                </div>
              </div>
            </div>

            {/* Center Microhpone Control */}
            <div className="flex flex-col items-center gap-2 border-t border-slate-900 pt-3">
              {/* Waveform */}
              <div className="flex items-center gap-0.5 h-6">
                {[4, 12, 24, 16, 8, 14, 20, 10, 5].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-indigo-500 rounded-full"
                    animate={{ height: [h, h * 0.3, h] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      delay: i * 0.08,
                    }}
                  />
                ))}
              </div>
              {/* Action Button */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-tr from-indigo-500 to-purple-600">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div className="h-1 w-16 bg-slate-800 rounded mt-1" />
            </div>
          </div>
        );
      case 'subitup':
        return (
          <div className="w-full h-full bg-slate-900 p-4 flex flex-col justify-between text-slate-200">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 bg-emerald-500 rounded-sm" />
                <div className="h-2 w-16 bg-slate-700 rounded" />
              </div>
              <div className="h-1.5 w-6 bg-slate-800 rounded" />
            </div>

            {/* Calendar Strip */}
            <div className="grid grid-cols-5 gap-1 my-3">
              {['M', 'T', 'W', 'T', 'F'].map((day, idx) => (
                <div key={idx} className={`p-1 text-center rounded border text-[7px] ${idx === 2 ? 'bg-emerald-950/40 border-emerald-500 text-emerald-400' : 'bg-slate-950/20 border-slate-800 text-slate-500'}`}>
                  <span className="block font-mono font-bold">{day}</span>
                  <span className="block text-[8px] mt-0.5">{14 + idx}</span>
                </div>
              ))}
            </div>

            {/* Shift Requests */}
            <div className="flex-1 flex flex-col gap-2 overflow-hidden justify-center">
              <div className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mb-1">SWAP REQUEST</div>
              
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="h-2 w-20 bg-slate-600 rounded mb-1" />
                  <div className="h-1.5 w-12 bg-slate-700 rounded" />
                </div>
                <div className="h-4 w-4 bg-emerald-900/30 border border-emerald-500 rounded-full flex items-center justify-center text-emerald-400 text-[8px] font-bold">✔</div>
              </div>

              <div className="flex justify-center items-center py-1">
                <svg className="w-3 h-3 text-emerald-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>

              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between opacity-80">
                <div>
                  <div className="h-2 w-16 bg-slate-600 rounded mb-1" />
                  <div className="h-1.5 w-16 bg-slate-800 rounded" />
                </div>
                <div className="h-3 w-8 bg-slate-800 rounded text-[7px] text-slate-400 text-center flex items-center justify-center">PENDING</div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-slate-950 pt-2.5 flex justify-around">
              <div className="h-5 w-10 bg-emerald-500 rounded flex items-center justify-center text-[7px] font-bold text-slate-950">ACCEPT</div>
              <div className="h-5 w-10 bg-slate-800 rounded flex items-center justify-center text-[7px] text-slate-400">DECLINE</div>
            </div>
          </div>
        );
      case 'futureone':
        return (
          <div className="w-full h-full bg-slate-900 p-4 flex flex-col justify-between text-slate-200">
            {/* Tournament Title */}
            <div className="bg-slate-950 border border-slate-850 p-2 rounded-lg flex justify-between items-center">
              <div>
                <div className="h-2 w-24 bg-amber-500 rounded mb-1" />
                <div className="h-1.5 w-16 bg-slate-700 rounded" />
              </div>
              <div className="h-4 w-4 bg-amber-500/20 border border-amber-500 rounded flex items-center justify-center text-[8px] text-amber-500 font-bold">F1</div>
            </div>

            {/* Roster & Check-In Area */}
            <div className="flex-1 flex flex-col justify-center gap-2.5 my-2">
              <div className="text-[7px] text-slate-400 font-bold uppercase tracking-wider">PLAYER ELIGIBILITY</div>

              {/* Roster Item 1 */}
              <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 flex items-center gap-2">
                <div className="h-5 w-5 bg-amber-900/30 border border-amber-500 rounded-full flex items-center justify-center text-[7px] font-bold text-amber-500">23</div>
                <div className="flex-1">
                  <div className="h-1.5 w-14 bg-slate-600 rounded mb-0.5" />
                  <div className="h-1 w-10 bg-slate-800 rounded" />
                </div>
                <div className="px-1.5 py-0.5 rounded bg-green-500/10 border border-green-500/30 text-[6px] text-green-400 font-bold">ELIGIBLE</div>
              </div>

              {/* Roster Item 2 */}
              <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 flex items-center gap-2">
                <div className="h-5 w-5 bg-slate-800 rounded-full flex items-center justify-center text-[7px] text-slate-400">10</div>
                <div className="flex-1">
                  <div className="h-1.5 w-20 bg-slate-600 rounded mb-0.5" />
                  <div className="h-1 w-12 bg-slate-800 rounded" />
                </div>
                <div className="px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[6px] text-amber-400 font-bold">CHECK-IN</div>
              </div>
            </div>

            {/* Broadcast banner */}
            <div className="bg-slate-950/70 border border-slate-850 p-2 rounded text-[7px] text-slate-400 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              <div className="flex-1 h-1.5 bg-slate-800 rounded" />
            </div>

            {/* Search/Filter UI */}
            <div className="bg-slate-950 p-1.5 rounded-full flex items-center gap-1.5 mt-2">
              <div className="h-3 w-3 bg-slate-800 rounded-full" />
              <div className="h-1.5 w-20 bg-slate-800 rounded" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative mx-auto w-[250px] h-[500px]">
      {/* Phone Outline Glass Body */}
      <div 
        className="absolute inset-0 rounded-[38px] border-4 border-slate-800 dark:border-slate-850 bg-slate-900 shadow-2xl overflow-hidden flex flex-col p-1.5"
        style={{
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px ${accentColor}15`
        }}
      >
        {/* Dynamic Island Speaker Capsule */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-950 rounded-full z-30 flex items-center justify-between px-2">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
          <div className="w-5 h-0.5 rounded bg-slate-900" />
        </div>

        {/* Screen Display Container */}
        <div className="relative flex-1 rounded-[32px] overflow-hidden border border-slate-950 z-10">
          {renderAbstractScreen()}

          {/* Glare/Shine Effect Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 rotate-12 -translate-y-1/2 scale-150" />
        </div>

        {/* Bottom Home Indicator */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-slate-650 rounded-full z-30" />
      </div>

      {/* Background visual aura glows */}
      <div 
        className={`absolute -inset-4 bg-gradient-to-tr ${gradient} rounded-[48px] blur-2xl opacity-10 -z-10`}
      />
    </div>
  );
};
