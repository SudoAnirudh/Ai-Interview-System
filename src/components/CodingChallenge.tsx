import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import CodeEditor from './coding/CodeEditor';
import TestCaseList from './coding/TestCaseList';
import { InterviewTimer } from '../services/timer';
import { evaluateCode } from '../services/codeEvaluation';
import { challenges } from '../data/challenges';
import type { TestCase } from '../types';

export default function CodingChallenge() {
  const challenge = challenges[0];
  const [code, setCode] = useState(challenge.starterCode);
  const [timeLeft, setTimeLeft] = useState(challenge.timeLimit * 60);
  const [testCases, setTestCases] = useState<TestCase[]>(challenge.testCases);

  useEffect(() => {
    const timer = new InterviewTimer(timeLeft, setTimeLeft);
    timer.start();
    return () => timer.stop();
  }, []);

  const handleRunCode = async () => {
    const results = await evaluateCode(code, testCases);
    setTestCases(results);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900">{challenge.title}</h1>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm ${
                challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {challenge.difficulty}
              </span>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none mb-6">
            <p>{challenge.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CodeEditor
              code={code}
              onChange={setCode}
              onRun={handleRunCode}
            />

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Test Cases</h2>
              <TestCaseList testCases={testCases} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}