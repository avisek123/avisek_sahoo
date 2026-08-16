export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  contribution: string;
  googlePlayUrl: string;
  appStoreUrl?: string;
  technologies: string[];
  features: string[];
  visualAccent: {
    gradient: string;
    shadow: string;
    badgeBg: string;
    accentColor: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "vaani",
    number: "01",
    name: "VAANI",
    category: "Social / Conversation Platform",
    description: "A conversation platform designed around structured, meaningful dialogue, allowing participants to engage through turn-based conversations and controlled microphone passing.",
    contribution: "React Native development & AI/LLM integration contribution.",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.avisek2026.vaani&hl=en_IN",
    technologies: ["React Native", "TypeScript", "Expo", "Zustand", "llama.rn", "AI/LLM Integration"],
    features: [
      "Controlled microphone-passing state machines.",
      "Turn-based real-time audio chat capabilities.",
      "Custom audio visualizers and playback controls.",
      "Robust offline sync using local caching protocols."
    ],
    visualAccent: {
      gradient: "from-violet-600 to-indigo-600",
      shadow: "shadow-violet-500/10",
      badgeBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
      accentColor: "#6366f1"
    }
  },
  {
    id: "subitup",
    number: "02",
    name: "SubItUp Mobile",
    category: "Workforce Management",
    description: "If you use 'SubItUp' you can now access your work schedule and make requests to Add, Drop, or Swap your shifts with your coworkers from your smartphone.",
    googlePlayUrl: "https://play.google.com/store/search?q=Subitup&c=apps&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/us/app/subitup/id468245296",
    contribution: "Mobile UI implementation & core scheduling API integration contribution.",
    technologies: ["React Native", "TypeScript", "Mobile UI", "API Integration", "Push Notifications"],
    features: [
      "Real-time shift view and schedule updates.",
      "Employee shift actions: add, drop, and swap interfaces.",
      "Secure API integration with enterprise scheduling services."
    ],
    visualAccent: {
      gradient: "from-emerald-600 to-teal-600",
      shadow: "shadow-emerald-500/10",
      badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      accentColor: "#10b981"
    }
  },
  {
    id: "futureone",
    number: "03",
    name: "FutureOne Sports",
    category: "Sports Operations & Tournament Management",
    description: "A mobile operations and compliance application for tournament administrators and youth sports organizations.",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.futureonesports",
    appStoreUrl: "https://apps.apple.com/us/app/futureone-sports/id6778689498",
    contribution: "React Native application engineering & compliance module contribution.",
    technologies: ["React Native", "TypeScript", "API Integration", "Authentication", "Real-time workflows"],
    features: [
      "Real-time player eligibility and compliance check-in.",
      "Roster management and division/team profiling.",
      "Broadcast communication channels for tournament updates.",
      "Global search for teams, schedules, and active players."
    ],
    visualAccent: {
      gradient: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/10",
      badgeBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      accentColor: "#f59e0b"
    }
  }
];
