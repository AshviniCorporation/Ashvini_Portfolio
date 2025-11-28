import { LucideIcon, Atom, BarChart3, Globe, Layers, ShieldCheck, Sparkles } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  accent: string;
};

export type ProjectCaseStudy = {
  title: string;
  category: string;
  summary: string;
  image: string;
  tags: string[];
};

export type Venture = {
  name: string;
  focus: string;
  description: string;
  website: string;
  stage: string;
};

export type CorporateEvent = {
  title: string;
  date: string;
  location: string;
  status: "upcoming" | "past";
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
};

export const servicesData: Service[] = [
  {
    title: "Product Strategy",
    description: "Research-driven roadmaps that align technology with measurable business impact.",
    icon: Atom,
    features: ["Vision workshops", "Opportunity mapping", "Customer journey insights"],
    accent: "#f5e8ff",
  },
  {
    title: "Experience Design",
    description: "Human-centered design systems that translate complex flows into effortless journeys.",
    icon: Sparkles,
    features: ["Design systems", "Rapid prototyping", "Accessibility-first UI"],
    accent: "#eaf9ff",
  },
  {
    title: "Engineering Pods",
    description: "Modular squads blending full-stack, mobile, and DevOps expertise for faster releases.",
    icon: Layers,
    features: ["API-first builds", "AI-assisted QA", "Performance budgets"],
    accent: "#fff4e5",
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade frameworks covering data privacy, resiliency, and governance.",
    icon: ShieldCheck,
    features: ["Threat modeling", "Zero-trust rollout", "Compliance playbooks"],
    accent: "#ecfdf3",
  },
  {
    title: "Market Intelligence",
    description: "Live dashboards that connect internal KPIs with competitive signals for leadership teams.",
    icon: BarChart3,
    features: ["Executive scorecards", "Predictive insights", "Data storytelling"],
    accent: "#e8f0ff",
  },
  {
    title: "Global Delivery",
    description: "Follow-the-sun delivery model with multilingual support and region-specific rollouts.",
    icon: Globe,
    features: ["Regional rollout", "24/7 support", "Localization"],
    accent: "#fef3f2",
  },
];

export const portfolioData: ProjectCaseStudy[] = [
  {
    title: "Nimbus Logistics OS",
    category: "Supply Chain",
    summary: "Command center for fleet visibility and automated customs workflows across three continents.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    tags: ["IoT", "Dashboard", "Automation"],
  },
  {
    title: "Arbor Banking Suite",
    category: "Fintech",
    summary: "Composable banking modules powering SME lending with real-time risk scoring.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    tags: ["Finance", "AI", "Compliance"],
  },
  {
    title: "Helio Health Portal",
    category: "Healthcare",
    summary: "Patient-first experience connecting diagnostics, telemedicine, and care teams.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    tags: ["MedTech", "Mobile", "Cloud"],
  },
  {
    title: "Aurora Retail OS",
    category: "Retail",
    summary: "Unified inventory, clienteling, and experiential commerce across flagships.",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    tags: ["CX", "Analytics", "Omnichannel"],
  },
  {
    title: "Solstice Energy Console",
    category: "Energy",
    summary: "Forecasting engine optimizing grid performance with carbon-aware scheduling.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    tags: ["Sustainability", "Data", "Platform"],
  },
  {
    title: "Lumina Learning Cloud",
    category: "Education",
    summary: "Adaptive learning journeys for enterprise upskilling and credentialing.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    tags: ["EdTech", "AI", "Web"],
  },
];

export const venturesData: Venture[] = [
  {
    name: "Northwind Labs",
    focus: "Intelligent manufacturing",
    description: "Invested in autonomous inspection stacks that pair computer vision with edge robotics.",
    website: "https://northwind.example.com",
    stage: "Series B",
  },
  {
    name: "Lumenary",
    focus: "Climate fintech",
    description: "Carbon financing rails that help exporters monetize verified offsets.",
    website: "https://lumenary.example.com",
    stage: "Series A",
  },
  {
    name: "Quill Studio",
    focus: "Creator infrastructure",
    description: "Micro-SaaS platform enabling local creators to launch branded commerce in hours.",
    website: "https://quill.example.com",
    stage: "Seed",
  },
  {
    name: "Truss Mobility",
    focus: "Urban mobility",
    description: "Last-mile delivery network pairing e-bikes with smart curbside lockers.",
    website: "https://truss.example.com",
    stage: "Growth",
  },
];

export const eventsData: CorporateEvent[] = [
  {
    title: "Ashvini Forward 2025",
    date: "Feb 18, 2025",
    location: "Singapore",
    status: "upcoming",
    description: "Flagship innovation summit unveiling our applied AI partnerships and venture launches.",
  },
  {
    title: "Sustainability Council",
    date: "Jan 12, 2025",
    location: "Amsterdam",
    status: "upcoming",
    description: "Roundtable with EU regulators on climate disclosures and digital MRV pipelines.",
  },
  {
    title: "Investor Q4 Briefing",
    date: "Nov 08, 2024",
    location: "Virtual",
    status: "past",
    description: "Results recap covering net-new ARR, portfolio performance, and capital allocation.",
  },
  {
    title: "Women in Product Residency",
    date: "Sep 22, 2024",
    location: "Toronto",
    status: "past",
    description: "Immersive mentorship sprint for 25 rising product leaders across our portfolio.",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    quote: "Ashvini's team translated our messy ops stack into a living platform strategy in eight weeks.",
    name: "Priya Raman",
    role: "COO",
    company: "Nimbus Logistics",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote: "Their venture studio paired our scientists with world-class engineers and it shows in our velocity.",
    name: "Dr. Felix Meyer",
    role: "Founder",
    company: "Northwind Labs",
    avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote: "The Ashvini pods behave like an extension of our leadership team—decisions are data-first and fast.",
    name: "Lucia Ortega",
    role: "Chief Digital Officer",
    company: "Helio Health",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote: "We moved from a legacy rollout schedule to coordinated global releases without trading off quality.",
    name: "Christopher Boone",
    role: "VP Technology",
    company: "Aurora Retail",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
  },
];
