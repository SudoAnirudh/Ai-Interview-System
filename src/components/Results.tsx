import React from 'react';
import AceEditor from "react-ace";
import { Award, Brain, Code, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
import type { InterviewResult, CodeEvaluation, BehavioralEvaluation } from '../types';

interface ResultsProps {
  result: InterviewResult;
}

function EvaluationCard({ evaluation }: { evaluation: CodeEvaluation | BehavioralEvaluation }) {
  const score = 'performanceScore' in evaluation 
    ? evaluation.performanceScore 
    : (evaluation.starScore + evaluation.clarity + evaluation.relevance) / 3;

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">
          Score: {Math.round(score)}%
        </div>
        {score >= 70 ? (
          <CheckCircle className="w-6 h-6 text-green-500" />
        ) : (
          <XCircle className="w-6 h-6 text-red-500" />
        )}
      </div>
      <div className="mb-4">
        <h4 className="font-medium mb-2">Feedback</h4>
        <p className="text-gray-600">{evaluation.feedback}</p>
      </div>
      {evaluation.suggestions.length > 0 && (
        <div>
          <h4 className="font-medium mb-2">Suggestions</h4>
          <ul className="list-disc list-inside text-gray-600">
            {evaluation.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Results({ result }: ResultsProps) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center mb-8">
            <Award className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Interview Results</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-indigo-600 mr-2" />
                <h2 className="text-xl font-semibold">Coding Performance</h2>
              </div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {result.codingScore}%
              </div>
              <div className="h-2 bg-indigo-200 rounded-full">
                <div
                  className="h-2 bg-indigo-600 rounded-full"
                  style={{ width: `${result.codingScore}%` }}
                />
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold">Behavioral Assessment</h2>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                {result.behavioralScore}%
              </div>
              <div className="h-2 bg-green-200 rounded-full">
              <div className="h-2 bg-green-600 rounded-full" style={{ width: `${result.behavioralScore}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-gray-600 mr-2" />
              <h2 className="text-xl font-semibold">Detailed Analysis</h2>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Coding Evaluations</h3>
              {result.codeEvaluations.map((evaluation, index) => (
                <EvaluationCard key={`code-${index}`} evaluation={evaluation} />
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Behavioral Evaluations</h3>
              {result.behavioralEvaluations.map((evaluation, index) => (
                <EvaluationCard key={`behavioral-${index}`} evaluation={evaluation} />
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold mb-3">Recommendations</h3>
              {result.recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 bg-gray-50 rounded-lg"
                >
                  <span className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-sm font-medium mr-3">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{rec}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Download Detailed Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}