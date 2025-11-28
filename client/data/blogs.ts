export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    title: "Translating Strategy into Shipping Rituals",
    excerpt:
      "How our hybrid squads frame quarterly bets, align with exec sponsors, and ship value every sprint.",
    category: "Product",
    date: "Nov 10, 2024",
    readTime: "6 min read",
    author: {
      name: "Shreya Verma",
      role: "Head of Delivery",
    },
  },
  {
    title: "Design Systems for Regulated Environments",
    excerpt:
      "A checklist we use when building accessible, auditable design languages for banks and energy grids.",
    category: "Design",
    date: "Oct 28, 2024",
    readTime: "8 min read",
    author: {
      name: "Julian Moore",
      role: "Design Director",
    },
  },
  {
    title: "Carbon Intelligence as a Service",
    excerpt:
      "Lessons from co-developing a data platform that helps exporters earn verified offsets in weeks, not months.",
    category: "Ventures",
    date: "Sep 19, 2024",
    readTime: "5 min read",
    author: {
      name: "Amara Chettri",
      role: "Principal, Climate",
    },
  },
  {
    title: "Composability in Enterprise Finance",
    excerpt:
      "Why modular core banking unlocks faster go-to-market motions for mid-market institutions.",
    category: "Engineering",
    date: "Aug 06, 2024",
    readTime: "7 min read",
    author: {
      name: "Michael Lee",
      role: "Partner Engineer",
    },
  },
];
