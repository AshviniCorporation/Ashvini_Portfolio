"use client"; // Required for Next.js App Router since we use useState

import React, { useState, CSSProperties } from 'react';

// --- Types ---

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
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// --- Data ---

const faqData: FAQCategoryData[] = [
  {
    category: "General Question",
    description: "Basic information about who we are, how we work, and how you can get started with us.",
    items: [
      {
        question: "What does your company do?",
        answer: "We provide a range of technology services including web and mobile app development, software solutions, and project management."
      },
      {
        question: "How do I start working with you?",
        answer: "Simply reach out through our contact page. We'll schedule a call to understand your needs and guide you through the next steps."
      },
      {
        question: "Do you work with individuals or only businesses?",
        answer: "We work with both individuals and organizations, depending on the project scope and goals."
      },
      {
        question: "Is there a consultation before the project begins?",
        answer: "Yes, we provide an initial discussion to understand your requirements and explore possible solutions."
      }
    ]
  },
  {
    category: "Technical Questions",
    description: "Answers to common questions about the tools, processes, and technical support involved in our projects.",
    items: [
      {
        question: "What technologies do you use?",
        answer: "We use a variety of modern technologies suited to each project. The stack is selected based on your goals and requirements."
      },
      {
        question: "Can you handle both design and development?",
        answer: "Yes, we cover both design and development to ensure a smooth and complete process from start to finish."
      },
      {
        question: "Will I be updated during the project?",
        answer: "Yes, we maintain regular communication through your preferred channels to keep you updated."
      },
      {
        question: "Can I make changes to the project later?",
        answer: "Yes, we support updates and improvements even after the project is completed. You can request changes anytime."
      }
    ]
  },
  {
    category: "Collaboration & Support",
    description: "Learn how we communicate, support, and work with clients during and after project delivery.",
    items: [
      {
        question: "How do we communicate during the project?",
        answer: "We use common tools like email, messages, and video calls to stay connected and organized."
      },
      {
        question: "What if I don't have technical knowledge?",
        answer: "No problem. We'll explain everything in simple terms and guide you through each step."
      },
      {
        question: "Can we work on flexible timelines?",
        answer: "Yes, we aim to be flexible and adjust timelines based on the project and your availability."
      },
      {
        question: "How do you ensure quality in your work?",
        answer: "We follow a structured process, test thoroughly, and review everything before delivering to ensure quality results."
      }
    ]
  }
];

// --- Components ---

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div style={styles.itemContainer}>
      <button 
        style={styles.questionButton} 
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span style={styles.questionText}>{question}</span>
        <span style={styles.icon}>{isOpen ? '−' : '+'}</span>
      </button>
      <div 
        style={{
          ...styles.answerContainer,
          maxHeight: isOpen ? '200px' : '0',
          opacity: isOpen ? 1 : 0,
          padding: isOpen ? '0 0 15px 0' : '0',
        }}
      >
        <p style={styles.answerText}>{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  // State tracks the unique index "categoryIndex-itemIndex"
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const toggleItem = (index: string) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.mainTitle}>FAQ</h1>
      
      {faqData.map((cat, catIndex) => (
        <div key={catIndex} style={styles.categoryBlock}>
          <div style={styles.categoryHeader}>
            <h2 style={styles.categoryTitle}>{cat.category}</h2>
            <p style={styles.categoryDescription}>{cat.description}</p>
          </div>
          
          <div style={styles.itemsList}>
            {cat.items.map((item, itemIndex) => {
              const uniqueIndex = `${catIndex}-${itemIndex}`;
              return (
                <FAQItem
                  key={itemIndex}
                  question={item.question}
                  answer={item.answer}
                  isOpen={activeIndex === uniqueIndex}
                  onClick={() => toggleItem(uniqueIndex)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Styles ---

const styles: Record<string, CSSProperties> = {
  pageContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    color: '#333',
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '40px',
    fontWeight: '700',
    color: '#111',
  },
  categoryBlock: {
    marginBottom: '50px',
  },
  categoryHeader: {
    marginBottom: '20px',
  },
  categoryTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#222',
  },
  categoryDescription: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '20px',
    lineHeight: 1.5,
  },
  itemContainer: {
    borderBottom: '1px solid #eaeaea',
    marginBottom: '10px',
  },
  questionButton: {
    width: '100%',
    background: 'none',
    border: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 0',
    cursor: 'pointer',
    textAlign: 'left',
  },
  questionText: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#333',
  },
  icon: {
    fontSize: '1.5rem',
    fontWeight: '300',
    marginLeft: '10px',
    color: '#0070f3',
  },
  answerContainer: {
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
  },
  answerText: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: 1.6,
    margin: 0,
  },
};

export default FAQSection;