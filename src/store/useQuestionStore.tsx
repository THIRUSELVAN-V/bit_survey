import { create } from "zustand";

type QuestionType = { key: number; label: string };

interface QuestionStore {
  question: string;
  setQuestion: (value: string) => void;

  selectedQuestionType: Set<string>;
  setSelectedQuestionType: (value: Set<string>) => void;

  selectedScale: Set<string>;
  setSelectedScale: (value: Set<string>) => void;
  
  isPreDefinedOptions: boolean;
  setIsPreDefinedOptions: (value: boolean) => void;

  scale: QuestionType[];
  predefinedOptions: QuestionType[];
  questionTypes: QuestionType[];
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  question: "",
  setQuestion: (value) => set({ question: value }),

  selectedQuestionType: new Set(),
  setSelectedQuestionType: (value) => set({ selectedQuestionType: value }),

  selectedScale: new Set(),
  setSelectedScale: (value) => set({selectedScale: value}),

  isPreDefinedOptions: false,
  setIsPreDefinedOptions: (value) => set({ isPreDefinedOptions: value }),

  scale: [
    { key: 1, label: "1" },
    { key: 2, label: "2" },
    { key: 3, label: "3" },
    { key: 4, label: "4" },
  ],

  predefinedOptions: [
    { key: 1, label: "Agree - Disagree" },
    { key: 2, label: "True or False" },
  ],

  questionTypes: [
    { key: 1, label: "Single choice" },
    { key: 2, label: "Multiple choice" },
    { key: 3, label: "Matrix Type" },
  ]
}));
