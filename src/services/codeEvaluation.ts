import type { TestCase } from '../types';

export async function evaluateCode(code: string, testCases: TestCase[]): Promise<TestCase[]> {
  return testCases.map(testCase => {
    try {
      // In a real implementation, this would use a secure code execution service
      const fn = new Function('input', code);
      const result = fn(testCase.input);
      const passed = JSON.stringify(result) === JSON.stringify(testCase.expectedOutput);
      
      return {
        ...testCase,
        result: result,
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