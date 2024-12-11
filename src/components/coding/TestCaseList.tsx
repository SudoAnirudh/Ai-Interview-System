import React from 'react';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';
import type { TestCase } from '../../types';

interface TestCaseListProps {
  testCases: TestCase[];
}

export default function TestCaseList({ testCases }: TestCaseListProps) {
  return (
    <div className="space-y-2">
      {testCases.map((testCase) => (
        <div
          key={testCase.id}
          className="p-4 bg-gray-50 rounded-lg border border-gray-200"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Test Case {testCase.id}</span>
            <StatusBadge testCase={testCase} />
          </div>
          <div className="text-sm text-gray-600">
            <div>Input: {JSON.stringify(testCase.input)}</div>
            {testCase.passed !== undefined && (
              <div>Expected: {JSON.stringify(testCase.expectedOutput)}</div>
            )}
            {testCase.error && (
              <div className="text-red-600">Error: {testCase.error}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function StatusBadge({ testCase }: { testCase: TestCase }) {
  if (testCase.error) {
    return (
      <span className="flex items-center text-red-600">
        <XCircle className="w-4 h-4 mr-1" />
        Error
      </span>
    );
  }

  if (testCase.passed === undefined) {
    return (
      <span className="flex items-center text-gray-500">
        <Clock className="w-4 h-4 mr-1" />
        Pending
      </span>
    );
  }

  return testCase.passed ? (
    <span className="flex items-center text-green-600">
      <CheckCircle2 className="w-4 h-4 mr-1" />
      Passed
    </span>
  ) : (
    <span className="flex items-center text-red-600">
      <XCircle className="w-4 h-4 mr-1" />
      Failed
    </span>
  );
}