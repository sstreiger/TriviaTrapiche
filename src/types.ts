export interface QuestionOption {
  id: 'A' | 'B' | 'C';
  text: string;
}

export type QuestionCategory =
  | 'Cooperativismo'
  | 'Historia y Origen'
  | 'Nuestra Comunidad'
  | 'Cuidado del Agua';

export interface Question {
  id: number;
  category: QuestionCategory;
  question: string;
  options: QuestionOption[];
  correctOptionId: 'A' | 'B' | 'C';
  explanation: string;
  funFact?: string;
}

export interface UserAnswer {
  questionId: number;
  selectedOptionId: 'A' | 'B' | 'C';
  isCorrect: boolean;
}

export type QuizScreen = 'start' | 'question' | 'result';
