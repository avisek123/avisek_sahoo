import React from 'react';

interface PhoneMockupProps {
  projectId: string;
  gradient: string;
  accentColor: string;
}

const projectScreenshots: Record<string, string> = {
  vaani: 'https://play-lh.googleusercontent.com/tW6xANkP--VU2SEMej1DowSLDJDmlrinxmTYaDEvqOfSAgMBpKwjoSFtXv7KKWtZVPnFl9Yg5P7fl_cWcRms=w1052-h592-rw',
  subitup: 'https://play-lh.googleusercontent.com/QnNIY01Lacx0ukJZnGSn0QNsIQM0kroaI1EGIYHzNBIT5YSgkLwlFPeSwsT8I_klnfxDDvprZOho6SSnxbiB=w1052-h592-rw',
  futureone: 'https://play-lh.googleusercontent.com/NT46oi7ciRaj1KFWateQgBYhDS-_5hdydBIeRGn-undf0M4J7Ov1hhs22JqSBtpTfMCeXqy-c47Lot7u7sp2=w1052-h592-rw',
};

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ projectId, gradient, accentColor }) => {
  const screenshotUrl = projectScreenshots[projectId];

  const renderScreen = () => {
    if (screenshotUrl) {
      return (
        <img
          src={screenshotUrl}
          alt={`${projectId} app screenshot`}
          className="w-full h-full object-cover object-top"
          draggable={false}
        />
      );
    }
    return null;
  };

  return (
    <div className="relative mx-auto w-[220px] sm:w-[250px] h-[440px] sm:h-[500px]">
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
          {renderScreen()}

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
