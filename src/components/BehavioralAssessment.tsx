import React, { useState } from 'react';
import { MessageCircle, ThumbsUp } from 'lucide-react';
import type { BehavioralQuestion } from '../types';

const sampleQuestions: BehavioralQuestion[] = [
  {
    id: '1',
    question: 'Tell me about a time when you had to deal with a challenging team situation.',
    category: 'Teamwork'
  },
  {
    id: '2',
    question: 'Describe a project where you had to learn a new technology quickly.',
    category: 'Learning & Adaptability'
  },
  {
    id: '3',
    question: 'How do you handle tight deadlines and pressure?',
    category: 'Stress Management'
  }
];

export default function BehavioralAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Behavioral Interview</h1>
            <p className="text-gray-600">
              Answer the following questions thoughtfully. Your responses will be analyzed for key behavioral traits.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-indigo-600 block mb-1">
                    {sampleQuestions[currentQuestion].category}
                  </span>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {sampleQuestions[currentQuestion].question}
                  </h3>
                  <textarea
                    className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Type your answer here..."
                    value={answers[sampleQuestions[currentQuestion].id] || ''}
                    onChange={(e) => setAnswers({
                      ...answers,
                      [sampleQuestions[currentQuestion].id]: e.target.value
                    })}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              
              {currentQuestion < sampleQuestions.length - 1 ? (
                <button
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                >
                  Next Question
                </button>
              ) : (
                <button
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  onClick={() => console.log('Submit answers:', answers)}
                >
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Submit Assessment
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}