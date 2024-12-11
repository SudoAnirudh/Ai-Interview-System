export interface CodingChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeLimit: number;
  starterCode: string;
  testCases: TestCase[];
}

export interface TestCase {
  id: string;
  input: any;
  expectedOutput: any;
  result?: any;
  passed?: boolean;
  error?: string | null;
}

export interface BehavioralQuestion {
  id: string;
  question: string;
  category: string;
}

export interface CodeEvaluation {
  qualityScore: number;
  performanceScore: number;
  feedback: string;
  suggestions: string[];
}

export interface BehavioralEvaluation {
  starScore: number;
  clarity: number;
  relevance: number;
  feedback: string;
  suggestions: string[];
}

export interface InterviewResult {
  codingScore: number;
  behavioralScore: number;
  feedback: string;
  recommendations: string[];
  codeEvaluations: CodeEvaluation[];
  behavioralEvaluations: BehavioralEvaluation[];
}

export interface Answer {
  questionId: string;
  answer: string;
  timestamp: number;
}