import type { CodingChallenge } from '../types';

export const challenges: CodingChallenge[] = [
  {
    id: '1',
    title: 'Two Sum',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    difficulty: 'Easy',
    timeLimit: 30,
    starterCode: `function twoSum(nums: number[], target: number): number[] {
  // Your code here
}`,
    testCases: [
      {
        id: '1',
        input: { nums: [2, 7, 11, 15], target: 9 },
        expectedOutput: [0, 1]
      },
      {
        id: '2',
        input: { nums: [3, 2, 4], target: 6 },
        expectedOutput: [1, 2]
      },
      {
        id: '3',
        input: { nums: [3, 3], target: 6 },
        expectedOutput: [0, 1]
      }
    ]
  }
];