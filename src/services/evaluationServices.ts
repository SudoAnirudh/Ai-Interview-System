import { aiService } from './aiService';
import type { 
  TestCase, 
  CodeEvaluation, 
  BehavioralEvaluation,
  CodingChallenge,
  BehavioralQuestion 
} from '../types';

export class EvaluationService {
  async evaluateCode(code: string, testCases: TestCase[], challenge: CodingChallenge): Promise<{
    testResults: TestCase[];
    aiEvaluation: CodeEvaluation;
  }> {
    // First run test cases
    const testResults = await this.runTestCases(code, testCases);
    
    // Then get AI evaluation
    const aiEvaluation = await aiService.evaluateCode(code, challenge);

    return {
      testResults,
      aiEvaluation
    };
  }

  async evaluateBehavioral(answer: string, question: BehavioralQuestion): Promise<BehavioralEvaluation> {
    return aiService.evaluateBehavioral(answer, question.question);
  }

  private async runTestCases(code: string, testCases: TestCase[]): Promise<TestCase[]> {
    return testCases.map(testCase => {
      try {
        const fn = new Function('input', code);
        const result = fn(testCase.input);
        const passed = JSON.stringify(result) === JSON.stringify(testCase.expectedOutput);
        
        return {
          ...testCase,
          result,
          passed,
          error: null
        };
      } catch (error) {
        return {
          ...testCase,
          result: null,
          passed: false,
          error: error.message
        };
      }
    });
  }
}

export const evaluationService = new EvaluationService();