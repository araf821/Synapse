export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "How is this different from just prompting ChatGPT?",
    answer:
      "ChatGPT is a conversational 'answer machine.' Synapse is a structured 'thinking workflow.' Our purpose-built interface and multi-agent system guide you through a deliberate process of critique and synthesis that a simple chat prompt cannot replicate. We eliminate the cognitive load of you having to force the AI to be a sparring partner.",
  },
  {
    question: "Who is Synapse for?",
    answer:
      "Synapse is for anyone whose work depends on the quality of their thinking. This includes PhD students developing a thesis, startup founders crafting a market strategy, lawyers building a case, consultants writing a report, and any writer or creator looking to produce deep, original work.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Your work is your own. We have a strict privacy policy and your syntheses are private to your account. We do not use your data to train AI models.",
  },
  {
    question: "What AI model do you use?",
    answer:
      "We use a proprietary orchestration layer that leverages multiple state-of-the-art models, including Google's Gemini, for different tasks. Our value is in our unique workflow and how we use these models as specialized tools, not in the models themselves.",
  },
  {
    question: "Is this going to slow me down?",
    answer:
      "Yes, and that's the point. For the 90% of your work that requires speed, use other tools. For the 10% that requires depth and originality, Synapse will save you from the long-term cost of shallow thinking. It's a strategic investment of your time.",
  },
];
