import React, { useState } from 'react';

const faqData = [
  {
    question: "Who can join ACMW?",
    answer: "ACMW is open to all students of Manipal Institute of Technology, irrespective of branch or year."
  },
  {
    question: "Is prior coding experience required?",
    answer: "No, beginners are welcome. ACMW conducts sessions for all skill levels."
  },
  {
    question: "What kind of events does ACMW organize?",
    answer: "Workshops, hackathons, talks, and hands-on technical sessions."
  },
  {
    question: "How can I become a member?",
    answer: "You can register during our membership drives or contact us."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-10 py-24">
      {/* Title Section */}
      <div className="mb-12">
        <h2 className="text-5xl font-bold text-white mb-2">FAQs</h2>
        <div className="w-24 h-1 bg-[#2B609E] rounded-full mb-4"></div>
        <p className="text-gray-400 italic">Frequently Asked Questions</p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#2D2A3D]/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-xl font-semibold text-white">{item.question}</span>
              <span className="text-3xl text-white font-light">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            
            {/* Answer - Only shows if openIndex matches */}
            <div 
              className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}