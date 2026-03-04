export const FEATURES = [
  { icon: "👁", title: "Eye Tracking", desc: "Monitors gaze direction and fixation duration to detect when attention shifts away from screen.", glow: "purple", bg: "rgba(168,85,247,0.12)" },
  { icon: "🙆", title: "Head Pose Detection", desc: "Analyzes head tilt, nod, and orientation to determine posture and attentiveness in real-time.", glow: "blue", bg: "rgba(59,130,246,0.12)" },
  { icon: "😴", title: "Fatigue & Yawn Detection", desc: "Recognizes facial cues like yawning, drooping eyelids, and micro-expressions that indicate fatigue.", glow: "cyan", bg: "rgba(6,182,212,0.12)" },
  { icon: "❓", title: "Pop-Up Quiz", desc: "Automatically fires a contextual quiz question when distraction is detected to snap attention back.", glow: "green", bg: "rgba(34,197,94,0.12)" },
  { icon: "🎮", title: "Focus Mini Game", desc: "A 60-second micro game that re-engages the learner and resets their cognitive state before resuming.", glow: "purple", bg: "rgba(168,85,247,0.12)" },
  { icon: "⏮", title: "Rewind Playback", desc: "Missed something while distracted? Instantly rewind the last 2–3 minutes of the session with one click.", glow: "blue", bg: "rgba(59,130,246,0.12)" },
  { icon: "📝", title: "Transcript + Summary", desc: "Full session transcript with AI-powered summary, keyword highlights, and action items generated post-session.", glow: "cyan", bg: "rgba(6,182,212,0.12)" },
  { icon: "🌈", title: "Kids Mode UI", desc: "A playful, colorful interface with avatar rewards, gentle focus nudges, and parental reporting tools.", glow: "green", bg: "rgba(34,197,94,0.12)" },
];

export const TEAM = [
  { initials: "PN", name: "Onaya Sendini", role: "ML Engineer", bio: "Onaya bridges frontend and backend for NOVI, developing the real-time dashboard with Next.js and powering it with a high-performance FastAPI backend that streams live engagement data to instructors.", img: "/team/Onaya.jpeg", socials: ["LinkedIn", "GitHub"], angle: 0, ring: "inner" },
  { initials: "AM", name: "Sethumdee Narampanawa", role: "Full-Stack Developer", bio: "Sethumdee architects the NOVI platform, building the Next.js frontend and FastAPI backend that powers real-time engagement analytics.", img: "/team/Sethumdee.jpeg", socials: ["LinkedIn", "GitHub"], angle: 120, ring: "inner" },
  { initials: "SR", name: "Abdulla", role: "UI/UX Designer", bio: "Abdulla crafts the NOVI experience — from the cyber-dark design system to the Kids Mode interface — ensuring every interaction is both functional and delightful.", img: "/team/Abdulla.jpeg", socials: ["LinkedIn", "Dribbble"], angle: 240, ring: "inner" },
  { initials: "ZM", name: "Yunus Ahamed", role: "Backend & DevOps", bio: "Yunus manages NOVI's infrastructure — WebSocket sessions, scalable ML inference, Docker deployments, and CI/CD pipelines on AWS.", img: "/team/Yunus.jpeg", socials: ["LinkedIn", "GitHub"], angle: 300, ring: "outer" },
  { initials: "FK", name: "Gayani Anuththara", role: "Product Manager", bio: "Gayani bridges the gap between pedagogy and technology, ensuring NOVI's features align with real classroom needs across K-12, university, and corporate environments.", img: "/team/Gayani.jpeg", socials: ["LinkedIn", "Twitter"], angle: 180, ring: "outer" },
  { initials: "WA", name: "Chathila Wijesinghe", role: "Team Lead & ML Engineer", bio: "Chathila leads the computer vision pipeline for NOVI, specializing in real-time gaze tracking and facial landmark detection using MediaPipe and PyTorch", img: "/team/Chathila.jpg", socials: ["LinkedIn", "GitHub"], angle: 60, ring: "outer"  },
];

export const FAQS = [
  { q: "Does NOVI store facial or video data?", a: "No. All visual processing happens locally on the device using WebAssembly-based ML models. No raw video is ever sent to our servers. Only anonymized engagement signals (attention scores, event timestamps) are transmitted." },
  { q: "How accurate is the distraction detection?", a: "NOVI's multi-modal model achieves 91% precision and 88% recall on our validation set. It fuses eye tracking, head pose, yawn detection, and audio signals to minimize false positives." },
  { q: "Can students disable the distraction monitoring?", a: "This is configurable by the institution. In host-controlled mode, monitoring is always on. In individual learning mode, the student can pause monitoring at any time." },
  { q: "What platforms and devices are supported?", a: "NOVI runs in any modern browser (Chrome, Edge, Firefox) on Windows, macOS, and ChromeOS. Mobile support (iOS/Android) is on the Q3 2025 roadmap." },
  { q: "Does NOVI work with existing LMS platforms?", a: "Yes. NOVI offers LTI 1.3 integration for Moodle, Canvas, and Blackboard, plus a Zoom SDK overlay for hybrid use cases." },
  { q: "Is there a free tier?", a: "NOVI offers a 30-day free trial for up to 30 participants. After that, pricing is per-seat per-month with institutional discounts available." },
];

export const IMPACT_STATS = [
  { value: "94%", label: "Reduction in passive distraction during sessions", gradient: "text-grad-purple-cyan" },
  { value: "3×", label: "Higher retention rate vs. traditional online classes", gradient: "text-grad-cyan-green" },
  { value: "2 min", label: "Average response time before distraction intervention", gradient: "text-grad-blue-purple" },
  { value: "10k+", label: "Students monitored during pilot programs", gradient: "text-grad-green-cyan" },
];

export const TESTIMONIALS = [
  { quote: "NOVI completely changed how I run online lectures. I can immediately tell which students are struggling to stay engaged and intervene before they fall behind.", author: "Dr. Leila Farouk", role: "Professor · University of Dubai", initials: "DL" },
  { quote: "The pop-up quiz feature is genius. Just when a student looks like they've tuned out, NOVI fires a quick question. It works — their attention snaps back instantly.", author: "Mr. Samuel Okonkwo", role: "High School Teacher · Lagos", initials: "MS" },
  { quote: "Kids Mode is exceptional. The gamified feedback loop keeps my 9-year-old students on track without ever feeling punished. Their parents love the reports too.", author: "Ms. Aisha Rahman", role: "Primary Educator · Dhaka Academy", initials: "AR" },
];

export const USE_CASES = [
  { icon: "📡", title: "New Meeting", sub: "Start an instant group session with AI focus tracking" },
  { icon: "🔗", title: "Join Meeting", sub: "Enter a host's session via link or code" },
  { icon: "📖", title: "Individual Learning", sub: "Solo study mode with personal attention analytics" },
  { icon: "👧", title: "Kids Mode", sub: "Friendly UI, softer interventions, parental view" },
  { icon: "🎓", title: "Classroom LMS", sub: "Integrate with existing LMS and video platforms" },
  { icon: "🏢", title: "Corporate Training", sub: "Track employee engagement in virtual workshops" },
];

export const HOW_IT_WORKS = {
  group: [
    { num: "// 01", title: "Live Engagement Dashboard", desc: "Hosts and teachers see a real-time attention map of all participants. Distracted attendees automatically surface to the top of the grid for immediate action." },
    { num: "// 02", title: "Smart Notifications", desc: "Instant alerts when a participant crosses distraction thresholds — and congratulations nudges when someone shows exceptional focus. Keep the energy high." },
    { num: "// 03", title: "Downloadable Reports", desc: "Post-session PDF and CSV reports per student: attention timeline, distraction events, quiz answers, and engagement score. Share with parents or advisors." },
  ],
  individual: [
    { num: "// 01", title: "Runs in the Background", desc: "NOVI quietly monitors your attention as you study — no intrusive UI. Just a small status dot showing your current focus level, staying out of your way." },
    { num: "// 02", title: "Personal Performance Board", desc: "Your private dashboard shows daily focus streaks, distraction heatmaps by time-of-day, and comparison against your own historical performance." },
    { num: "// 03", title: "Session Summary Report", desc: "After every study session, get an AI-generated summary: what you covered, where you lost focus, key terms from the transcript, and suggested review topics." },
  ],
};

// Convenience aliases for HowItWorks component
export type HowItWorksStep = { num: string; title: string; desc: string };
export const HOW_GROUP: HowItWorksStep[] = HOW_IT_WORKS.group;
export const HOW_INDIVIDUAL: HowItWorksStep[] = HOW_IT_WORKS.individual;

// Type exports
export type TeamMember = typeof TEAM[number];
export type Feature = typeof FEATURES[number];

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Impact", href: "#impact" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];
