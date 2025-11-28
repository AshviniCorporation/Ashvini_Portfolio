export type Course = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  mentor: {
    name: string;
    image: string;
    bio: string;
  };
  syllabus: {
    week: number;
    topic: string;
    details: string;
  }[];
};

export const coursesData: Course[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Design responsive interfaces, build accessible frontends, and connect them to scalable APIs using the modern JavaScript toolchain.",
    duration: "12 weeks",
    price: "$799",
    mentor: {
      name: "Anaya Kapoor",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
      bio: "Principal engineer specializing in product-grade React, Node, and design systems for venture-backed startups.",
    },
    syllabus: [
      {
        week: 1,
        topic: "Foundations & Accessibility",
        details:
          "Semantic HTML, WCAG principles, Git workflows, and setting up a clean developer environment.",
      },
      {
        week: 2,
        topic: "Modern CSS Systems",
        details:
          "Utility-first styling with Tailwind CSS, responsive layouts, and motion best practices.",
      },
      {
        week: 4,
        topic: "JavaScript & TypeScript Essentials",
        details:
          "ES2023 features, strict typing strategies, and building reusable helpers.",
      },
      {
        week: 6,
        topic: "Frontend Architecture",
        details:
          "Next.js App Router patterns, caching, dynamic routing, and server actions.",
      },
      {
        week: 9,
        topic: "API Integration",
        details:
          "Design REST/GraphQL contracts, handle auth flows, and ship production-ready fetch layers.",
      },
      {
        week: 12,
        topic: "Capstone Delivery",
        details:
          "Ship a polished SaaS dashboard with metrics, onboarding, and deployment on Vercel.",
      },
    ],
  },
  {
    slug: "data-science",
    title: "Data Science",
    description:
      "Master data storytelling through Python, statistics, and machine learning pipelines tailored for business teams.",
    duration: "10 weeks",
    price: "$899",
    mentor: {
      name: "Dr. Miguel Soriano",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop",
      bio: "Former lead data scientist at a fintech unicorn, focused on ethical AI and outcome-driven analytics.",
    },
    syllabus: [
      {
        week: 1,
        topic: "Data Fluency",
        details:
          "Structured vs. unstructured data, SQL refreshing, and exploratory analysis rituals.",
      },
      {
        week: 3,
        topic: "Python for Analytics",
        details:
          "Pandas, NumPy, clean-room notebooks, and writing reproducible code.",
      },
      {
        week: 5,
        topic: "Statistics That Matter",
        details:
          "Hypothesis testing, experiment design, Bayesian intuition, and avoiding common fallacies.",
      },
      {
        week: 7,
        topic: "Machine Learning Toolkit",
        details:
          "Model selection, scikit-learn pipelines, evaluation metrics, and MLOps primers.",
      },
      {
        week: 9,
        topic: "Storytelling & Dashboards",
        details:
          "Data visualization heuristics, crafting narratives, and building live dashboards.",
      },
      {
        week: 10,
        topic: "Executive Presentation",
        details:
          "Translate insights into action plans, stakeholder buy-in, and portfolio showcase.",
      },
    ],
  },
];
