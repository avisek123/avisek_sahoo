export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  phone: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
  summary: string;
  aboutText: string[];
  education: {
    degree: string;
    institution: string;
    location: string;
    duration: string;
  }[];
  experience: {
    role: string;
    company: string;
    location: string;
    duration: string;
    highlights: string[];
  }[];
  skills: {
    category: string;
    items: string[];
    isPrimary?: boolean;
  }[];
  aiFocus: {
    heading: string;
    description: string;
    points: string[];
  };
}

export const profileData: Profile = {
  name: "Avisek Sahoo",
  title: "Senior Mobile App Developer",
  subtitle: "Senior Software Engineer",
  location: "Odisha, India",
  phone: "+91 8637222653",
  email: "sahooavisek41@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/avisek-sahoo-bb1a7a1a5/",
    github: "https://github.com/avisek123",
    twitter: "https://twitter.com/SahooAvisek",
    instagram: "https://www.instagram.com/avisek_143/",
    facebook: "https://www.facebook.com/avisek.sahoo.984"
  },
  summary: "Senior software engineer specializing in high-performance React Native development, modern backend services, and AI-powered mobile architectures.",
  aboutText: [
    "I am a Senior Mobile App Developer and Software Engineer with a passion for building high-fidelity, high-performance applications that deliver exceptional user experiences.",
    "With deep expertise in React Native, TypeScript, and the Expo ecosystem, I specialize in architecting modular mobile applications that integrate seamlessly with modern cloud infrastructure and AI services.",
    "My focus is always on engineering with a product mindset: ensuring code quality through testing and review, identifying and resolving performance bottlenecks, and leading cross-functional teams to ship products that people actually use."
  ],
  education: [
    {
      degree: "MCA — Master of Computer Application",
      institution: "Gandhi Institute For Technology",
      location: "Bhubaneswar",
      duration: "Jan 2019 — Jan 2021"
    },
    {
      degree: "Bachelor of Sciences in Computer Science",
      institution: "Chitalo Degree Mohavidyalaya",
      location: "Jajpur",
      duration: "Jan 2015 — Jan 2018"
    }
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "York IE",
      location: "Ahmedabad",
      duration: "May 2023 — Present",
      highlights: [
        "Architected and shipped Vaani, a privacy-first offline AI chat app for Android using on-device LLM via llama.rn.",
        "Built OTA release pipeline using EAS Update with fingerprint-based runtime versioning, cutting release turnaround for JS-only changes and removing manual store resubmissions.",
        "Designed a server-driven, modular dynamic UI system for a large-scale sports app supporting 108 unique UI combinations.",
        "Implemented a backend-driven force-update system and FCM push notification handling, and optimized overall application performance by 30% through architectural refactors."
      ]
    },
    {
      role: "Senior Software Developer",
      company: "SearchingYard Software Private Limited",
      location: "Bhubaneswar",
      duration: "Feb 2021 — Apr 2023",
      highlights: [
        "Designed and developed highly reusable React Native UI components, custom tab bars, and map views.",
        "Implemented secure local and remote access integrations, including image pickers, document pickers, and local storage caches.",
        "Built robust push notification services to drive higher user engagement and retention.",
        "Mentored junior developers on React Native best practices, component lifecycles, and TypeScript patterns.",
        "Integrated modern native library wrappers and third-party APIs to deliver seamless device-specific capabilities."
      ]
    }
  ],
  skills: [
    {
      category: "Core Stack",
      isPrimary: true,
      items: ["React Native", "TypeScript", "JavaScript", "Expo", "Redux Toolkit", "Node.js", "Supabase"]
    },
    {
      category: "Mobile Architecture & Libraries",
      items: ["React Navigation", "Zustand", "TanStack Query", "Firebase", "OTA Updates", "EAS Build & Submit", "Push Notifications"]
    },
    {
      category: "Engineering & Tooling",
      items: ["Git", "GitHub Actions", "REST APIs", "Authentication Systems (OAuth, JWT)", "AI/LLM Integration", "Prompt Engineering"]
    }
  ],
  aiFocus: {
    heading: "BUILDING WITH AI, NOT JUST TALKING ABOUT IT.",
    description: "Integrating intelligent services directly into mobile runtimes to enable offline capability, real-time audio conversations, and smart assistance.",
    points: [
      "AI/LLM Integration: Leveraging API-based model interfaces (OpenAI, Gemini) inside mobile flows.",
      "Prompt Engineering: Structuring complex instructions and system prompts to ensure deterministic mobile outputs.",
      "AI-Assisted Workflows: Utilizing advanced code generation and semantic context interfaces to accelerate developer velocity."
    ]
  }
};
