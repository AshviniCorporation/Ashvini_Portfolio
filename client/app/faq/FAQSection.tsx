"use client";
import { Dot } from "lucide-react"

import React, { useCallback, useState } from "react";
import { montserrat, outfit } from "../fonts/font";

interface FAQItemData {
  question: string;
  answer: string;
}

interface FAQCategoryData {
  category: string;
  description: string;
  items: FAQItemData[];
}

interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const faqData: FAQCategoryData[] = [
  {
    category: "General Question",
    description:
      "Basic information about who we are, how we work, and how you can get started with us.",
    items: [
      {
        question: "What does your company do?",
        answer:
          "We provide a range of technology services including web and mobile app development, software solutions, and project management.",
      },
      {
        question: "How do I start working with you?",
        answer:
          "Simply reach out through our contact page. We'll schedule a call to understand your needs and guide you through the next steps.",
      },
      {
        question: "Do you work with individuals or only businesses?",
        answer:
          "We work with both individuals and organizations, depending on the project scope and goals.",
      },
      {
        question: "Is there a consultation before the project begins?",
        answer:
          "Yes, we provide an initial discussion to understand your requirements and explore possible solutions.",
      },
    ],
  },
  {
    category: "Technical Questions",
    description:
      "Answers to common questions about the tools, processes, and technical support involved in our projects.",
    items: [
      {
        question: "What technologies do you use?",
        answer:
          "We use a variety of modern technologies suited to each project. The stack is selected based on your goals and requirements.",
      },
      {
        question: "Can you handle both design and development?",
        answer:
          "Yes, we cover both design and development to ensure a smooth and complete process from start to finish.",
      },
      {
        question: "Will I be updated during the project?",
        answer:
          "Yes, we maintain regular communication through your preferred channels to keep you updated.",
      },
      {
        question: "Can I make changes to the project later?",
        answer:
          "Yes, we support updates and improvements even after the project is completed. You can request changes anytime.",
      },
    ],
  },
  {
    category: "Collaboration & Support",
    description:
      "Learn how we communicate, support, and work with clients during and after project delivery.",
    items: [
      {
        question: "How do we communicate during the project?",
        answer:
          "We use common tools like email, messages, and video calls to stay connected and organized.",
      },
      {
        question: "What if I don't have technical knowledge?",
        answer:
          "No problem. We'll explain everything in simple terms and guide you through each step.",
      },
      {
        question: "Can we work on flexible timelines?",
        answer:
          "Yes, we aim to be flexible and adjust timelines based on the project and your availability.",
      },
      {
        question: "How do you ensure quality in your work?",
        answer:
          "We follow a structured process, test thoroughly, and review everything before delivering to ensure quality results.",
      },
    ],
  },
];

const FAQItem: React.FC<FAQItemProps> = React.memo(
  ({ id, question, answer, isOpen, onToggle }) => {
    const contentId = `${id}-content`;

    return (
      <div
        className={`border-b border-gray-200 overflow-hidden ${outfit.className} transition-colors duration-200 ${
          isOpen ? "bg-purple-100 rounded-xl" : "bg-transparent"
        }`}
      >
        <button
          className="w-full flex justify-between items-center py-4 px-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          onClick={() => onToggle(id)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          type="button"
        >
          <span
            className={`text-base md:text-lg font-medium transition-colors duration-150 ${
              isOpen ? "text-purple-600" : "text-gray-900"
            }`}
          >
            {question}
          </span>

          <span
            className={`ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border text-sm font-semibold transition-transform duration-200 ${
              isOpen
                ? "rotate-45 border-purple-500 text-purple-400 bg-white"
                : "border-gray-300 text-gray-500 bg-gray-50"
            }`}
            aria-hidden="true"
          >
            +
          </span>
        </button>

        <div
          id={contentId}
          className={`px-4 pt-0 pr-4 pl-4 transition-[grid-template-rows,opacity] duration-200 ease-out ${
            isOpen
              ? "grid grid-rows-[1fr] opacity-100 pb-4"
              : "grid grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

FAQItem.displayName = "FAQItem";

const FAQSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleToggle = useCallback((id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  const highlightLastWord = (text: string) => {
    const words = text.split(" ");
    const lastWord = words.pop();
    return (
      <>
        {words.join(" ") + " "}
        <span className="text-purple-500">{lastWord}</span>
      </>
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20 font-sans">
      <div
        className={`${montserrat.className} text-center mb-12 md:mb-16 bg-purple-500 rounded-2xl p-8 text-white`}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Frequently Asked Questions
        </h1>
        <div className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base flex justify-center">
          <Dot size={24} color="white" />
          Ashvini Corporation.
        </div>
      </div>

      <div className="space-y-14 md:space-y-16">
        {faqData.map((cat, catIndex) => (
          <div
            key={cat.category}
            className="grid md:grid-cols-12 gap-8 md:gap-10 items-start"
          >
            <div className="md:col-span-4 space-y-3">
              <h2
                className={`${montserrat.className} text-xl md:text-4xl font-semibold text-gray-900`}
              >
                {highlightLastWord(cat.category)}
              </h2>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="md:col-span-8">
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 divide-y divide-gray-100">
                {cat.items.map((item, itemIndex) => {
                  const id = `${catIndex}-${itemIndex}`;
                  return (
                    <FAQItem
                      key={id}
                      id={id}
                      question={item.question}
                      answer={item.answer}
                      isOpen={activeId === id}
                      onToggle={handleToggle}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
